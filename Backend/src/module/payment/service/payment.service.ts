import {
    BadRequestException,
    Inject,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import * as PayU from 'payu-websdk';
import * as crypto from 'crypto';
import {
    Address,
    DEVICE,
    HomeCollectionChargeDataType,
    PAYMENT_STATUS,
    PAYMENT_TYPE,
    SESSION,
    UserProfile,
} from '../constants/payment.constants';
import { PaymentRepository } from '../repository/payment.repository';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import {
    HOME_COLLECTION_ERROR,
    ITEM_ERROR,
    UHID_PROFILE_ERROR,
} from 'src/constants/error';
import { ApolloHlService } from 'src/service-gateway/service/itdose_apollohl.service';
import { OrderPatientEntity } from 'src/module/home-collection/entity/order_patient.entity';
import { InitiatePaymentDto } from '../dto/initiate_payment.dto';
import { OrderEntity } from 'src/module/home-collection/entity/order.entity';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { ItemInclusionService } from 'src/module/dynamic-roaster/item-inclusion/service/item_inclusion_service';
import { plainToInstance } from 'class-transformer';
import { ItemInclusionQueryDto } from 'src/module/dynamic-roaster/item-inclusion/dto/item_inclusion_body.dto';
import { ApolloDynamicRoasterServiceGateway } from 'src/service-gateway/service/apollo_dynamic_roaster.service';
import { UhidProfile } from 'src/module/user-uhid-profile/entity/uhid_profile.entity';
import { UatLimsApolloHlServiceGateway } from 'src/service-gateway/service/uatlims_apollohl.service';
import {
    // CouponDataDto,
    CouponDto,
    CouponValidationRequestDto,
} from '../dto/coupon_data.dto';
import { TestDetailEntity } from 'src/module/home-collection/entity/test_detail.entity';
@Injectable()
export class PaymentService {
    constructor(
        private readonly paymentRepository: PaymentRepository,
        private readonly configService: ConfigService,
        private readonly apolloHlService: ApolloHlService,
        private readonly itemInclusionService: ItemInclusionService,
        private readonly apolloDynamicRoasterService: ApolloDynamicRoasterServiceGateway,
        private readonly uatLimsApollo: UatLimsApolloHlServiceGateway,
        @Inject(WINSTON_MODULE_PROVIDER)
        private readonly logger: Logger,
    ) {}

    async initiatePayment(info: InitiatePaymentDto) {
        const payuKey = this.configService.get<string>('payu.key');
        const payuSalt = this.configService.get<string>('payu.salt');
        const redirectLink =
            this.configService.get<string>('payu.redirectLink');
        const duplicateResult = await this.checkDuplicates(info);
        if (duplicateResult != 0) {
            throw new BadRequestException(
                `Items are duplicates for itemId ${duplicateResult}`,
            );
        }

        const apolloDomain = this.configService.get('itdose.apolloBaseUrl');

        let amount = 0;
        const user = await this.paymentRepository.findUser(
            info.patientInfo[0].patientId,
        );

        if (!user) {
            throw new HttpExceptionWrapper(
                UHID_PROFILE_ERROR.PROFILE_NOT_FOUND,
            );
        }

        // Inter-service call to validate Coupon api
        // Prepare data for validateCoupon API call
        const couponValidationRequest: any = {
            Coupons: info.couponCode ? [{ CouponCode: info.couponCode }] : [],
            MobileNo: user.mobilenumber,
            patientInfo: info.patientInfo.map((patient) => ({
                patientId: patient.patientId,
                testDetails: patient.testDetails.map((test) => ({
                    itemId: test.itemId,
                    cityId: test.cityId,
                })),
            })),
        };

        // Call validateCoupon method to get discount amount
        const validateCouponResponse = await this.validateCoupon(
            couponValidationRequest,
        );

        this.logger.info('inside initiate payment method api', {
            validateCouponResponse,
        });

        if (info?.couponCode && !validateCouponResponse) {
            throw new HttpExceptionWrapper(
                HOME_COLLECTION_ERROR.COUPON_NOT_VALIDATED,
            );
        }

        // total discount for all the tests which to be subtracted from totalAmount.
        const totalDiscAmount = this.calculateTotalDiscount(
            validateCouponResponse,
        );
        const testsDetailsWithDiscount =
            validateCouponResponse?.data?.tests || [];

        const address_id = info.addressId;
        const appointmentTime = info.appointmentTime;
        const paymentType = info.payment_type;
        const hcRedeem = info.hcRedeem ?? 0;
        const homeCollectionCharges = info.homeCollectionCharges ?? 0;
        const testsDetails = validateCouponResponse?.data?.tests;

        const address = await this.paymentRepository.findAddress(address_id);
        if (!address) {
            throw new HttpExceptionWrapper(
                UHID_PROFILE_ERROR.ADDRESS_NOT_FOUND,
            );
        }

        const blockSlotData = await this.getBlockSlotData(info, address, user);

        const responseData = await this.apolloDynamicRoasterService.blockSlot(
            blockSlotData,
        );

        if (
            responseData.status == 'fail' ||
            responseData.preBookingId == null ||
            responseData.statusCode == 500
        ) {
            throw new NotFoundException(responseData.message);
        }

        const subOrderIds = responseData?.familyDetails[0]?.patientDetails.map(
            (result: any) => {
                return result.subOrderId;
            },
        );

        const orderObj = {
            address_id,
            payment_status: PAYMENT_STATUS.PENDING,
            mobile_number: user.mobilenumber,
            hc_redeem: hcRedeem,
            home_collection_charges: homeCollectionCharges,
            payment_type: paymentType,
            prebooking_id_digital: responseData.preBookingId,
            unique_id: info?.uniqueId,
            coupon_code: info?.couponCode,
            created_at: new Date(),
            updated_at: new Date(),
        };

        const order = await this.paymentRepository.createOrder(orderObj);
        const orderId = order.id;

        let i = 0;
        const orderPatientsInfo = info.patientInfo.map((obj: any) => {
            return {
                patient_id: obj.patientId,
                order_id: orderId,
                appointment_time: appointmentTime,
                sub_order_id: subOrderIds[i++],
            };
        });

        const orderPatients =
            await this.paymentRepository.createOrderPatientMapper(
                orderPatientsInfo,
            );

        const testDetailArr = [];
        const tests = [];

        for (let i = 0; i < orderPatients.length; i++) {
            const testDetail = info.patientInfo[i].testDetails;
            for (let j = 0; j < testDetail.length; j++) {
                const itemDetail = testDetail[j];
                const item = await this.paymentRepository.findItem(
                    itemDetail.itemId,
                    itemDetail.cityId,
                );
                console.log('****************', { item });

                if (!item) {
                    throw new HttpExceptionWrapper(ITEM_ERROR.DATA_NOT_FOUND, {
                        message: `Invalid itemId${itemDetail.itemId}`,
                    });
                }
                amount += item.rate;

                const discAmount =
                    testsDetailsWithDiscount?.find(
                        (test: any) => test.itemid == item.itemid,
                    )?.discamount ?? 0;

                testDetailArr.push({
                    order_patient_id: orderPatients[i].id,
                    item_id: item.id,
                    disc_amt: discAmount,
                });

                tests.push({
                    ItemID: item.itemid.toString(),
                    ItemName: item.itemname,
                    Rate: item.rate,
                });
            }
        }

        let finalAmount =
            amount + homeCollectionCharges - hcRedeem - totalDiscAmount;
        if (finalAmount < 0) {
            finalAmount = 0;
        }
        await OrderEntity.update(
            { total_amount: finalAmount, updated_at: new Date() },
            { where: { id: orderId } },
        );

        await this.paymentRepository.createTestDetail(testDetailArr);

        const txnid = generateUniqueTxnId();

        if (paymentType == PAYMENT_TYPE.COD) {
            await this.successPayment({
                udf1: orderId,
                paymentMode: 'COD',
                tests: testsDetails,
                couponCode: info?.couponCode,
            });
            await OrderEntity.update(
                { payment_status: PAYMENT_STATUS.PENDING },
                { where: { id: orderId } },
            );
            const newOrder = await OrderEntity.findOne({
                where: { id: orderId },
                raw: true,
            });

            return {
                ...newOrder,
                form: null,
            };
        }

        if (finalAmount == 0) {
            await this.successPayment({
                udf1: orderId,
                paymentMode: 'ONLINE',
                txnid,
                tests: testsDetails,
                couponCode: info?.couponCode,
            });
            const newOrder = await OrderEntity.findOne({
                where: { id: orderId },
                raw: true,
            });

            return {
                ...newOrder,
                form: null,
            };
        }

        const obj = {
            amount: finalAmount,
            txnid: txnid,
            productinfo: info.productInfo ?? 'Test',
            firstname: user.firstname,
            email: user.email,
            phone: user.mobilenumber,
            surl: `${apolloDomain}/api/v1/order-payment/success`,
            furl: `${apolloDomain}/api/v1/order-payment/failure`,
            hash: generatePayUHash(payuKey, payuSalt),
            address1: address.address,
            city: address.cityName,
            state: address.stateName,
            country: address.countryName,
            zipcode: address.areaId,
            udf1: order.id,
            udf2: txnid,
        };

        const payuClient = await new PayU(
            {
                key: payuKey,
                salt: payuSalt,
            },
            redirectLink,
        );

        try {
            const response = await payuClient.paymentInitiate(obj);

            this.logger.info('Printing payu reponse', { response });
            const newOrder = await OrderEntity.findOne({
                where: { id: orderId },
                raw: true,
            });

            return {
                ...newOrder,
                form: response,
            };
        } catch (err) {
            this.logger.error('Error initiating payment:', { err });
        }

        function generatePayUHash(payuKey: string, payuSalt: string): string {
            const hashString = `${payuKey}|${txnid}|${amount}|${info.productInfo}|${user.firstname}|${user.email}|||||||||||${payuSalt}`;
            return crypto.createHash('sha512').update(hashString).digest('hex');
        }

        function generateUniqueTxnId(): string {
            const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
            let txnId = '';

            for (let i = 0; i < 5; i++) {
                const randomIndex = Math.floor(
                    Math.random() * characters.length,
                );
                txnId += characters[randomIndex];
            }

            const timestamp = Date.now().toString().slice(-5);

            return txnId + timestamp;
        }
    }

    calculateTotalDiscount(validateCouponResponse: any): number {
        const tests = validateCouponResponse.data?.tests || [];
        return tests.reduce(
            (total: any, test: any) => total + (test.discamount || 0),
            0,
        );
    }

    // async getTransactionDetails(startDate: string, endDate: string) {
    //     const payuClient = new PayU(
    //         {
    //             key: PAYMENT_CONSTANTS.KEY,
    //             salt: PAYMENT_CONSTANTS.SALT,
    //         },
    //         PAYMENT_CONSTANTS.TEST, // Possible values: 'TEST' or 'LIVE'
    //     );

    //     try {
    //         const response = await payuClient.getTransactionDetails(
    //             startDate,
    //             endDate,
    //         );

    //         this.logger.info({ response });
    //     } catch (err) {
    //         this.logger.info('Printing error in transaction details:', { err });
    //     }
    // }

    async verifyPayment(txnID: string) {
        const payuKey = this.configService.get<string>('payu.key');
        const payuSalt = this.configService.get<string>('payu.salt');
        const redirectLink =
            this.configService.get<string>('payu.redirectLink');
        const payuClient = new PayU(
            {
                key: payuKey,
                salt: payuSalt,
            },
            redirectLink,
        );

        try {
            const response = await payuClient.verifyPayment(txnID);

            return response;
        } catch (err) {
            this.logger.error('Printing error in transaction details:', {
                err,
            });
        }
    }

    async successPayment(body: any) {
        this.logger.info(
            'inside initiate payment method service api with data',
            { body },
        );
        const orderId = body.udf1;
        const paymentMode = body.paymentMode;

        // Fetch the order
        const order = await this.paymentRepository.findOrder(orderId);
        if (!order) {
            throw new BadRequestException('Order not found');
        }

        // Fetch the address associated with the order
        const addressId = order.address_id;
        const address = await this.paymentRepository.findAddress(addressId);
        if (!address) {
            throw new HttpExceptionWrapper(
                UHID_PROFILE_ERROR.ADDRESS_NOT_FOUND,
            );
        }

        // Update order status
        await this.paymentRepository.updateOrder(order.id);

        const bookSlotBodyData = {
            address: address.address,
            sessionId: SESSION.SESSION_ID,
            preBookingId: order.prebooking_id_digital,
        };

        const bookSlotData = await this.apolloDynamicRoasterService.bookSlot(
            bookSlotBodyData,
        );

        if (bookSlotData.status == 'fail') {
            throw new BadRequestException(bookSlotData.message);
        }
        const patients: number[] = [];
        console.log('before homeCollection');

        // Prepare HomeCollectionData
        const HomeCollectionData = await Promise.all(
            order.orderPatients.map(async (orderPatient) => {
                this.logger.info('inside success payment method api', {
                    orderPatient: orderPatient.toJSON(),
                });

                const dob = this.formatDate(orderPatient?.uhidProfile?.dob);
                patients.push(orderPatient.patient_id);

                return {
                    Patient_ID: `${orderPatient.patient_id}`,
                    Title: orderPatient?.uhidProfile?.title || 'Mr.',
                    PName: orderPatient?.uhidProfile?.firstname || 'Guest',
                    Gender: orderPatient?.uhidProfile?.gender || 'male',
                    DOB: dob,
                    Mobile:
                        '+91' + (orderPatient?.uhidProfile?.mobilenumber || ''),
                    Alternatemobileno:
                        orderPatient?.uhidProfile?.mobilenumber || '',
                    Email: orderPatient?.uhidProfile?.email || '',
                    Pincode: +order?.address?.pincode || 0,
                    House_No: order?.address?.address || '',
                    Landmark: order?.address?.areaName || '',
                    Appdatetime: orderPatient.appointment_time || '',
                    Client: process.env.HC_APOLLO_DIAGONISTICS_CLIENT,
                    Paymentmode: paymentMode || 'ONLINE',
                    ReferedDoctor: 'Self',
                    DoctorID: 0,
                    Latitude: order?.address?.lat || 0,
                    Longitude: order?.address?.lng || 0,
                    TestDetail: await Promise.all(
                        orderPatient.testDetailEntity.map(
                            async (testDetail) => {
                                const discAmt = body.tests
                                    ? body.tests.find(
                                          (test: any) =>
                                              test.itemId ===
                                              testDetail.itemDetails.itemid,
                                      )?.discAmt || 0
                                    : await TestDetailEntity.findOne({
                                          where: {
                                              order_patient_id:
                                                  testDetail.order_patient_id,
                                              item_id: testDetail.item_id,
                                          },
                                          attributes: ['disc_amt'],
                                      }).then(
                                          (record) => record?.disc_amt || 0,
                                      );

                                return {
                                    DiscAmt: discAmt,
                                    itemid: testDetail.itemDetails.itemid,
                                    ItemName: testDetail.itemDetails.itemname,
                                    NetAmt:
                                        testDetail.itemDetails.rate - discAmt,
                                    PaidAmt:
                                        paymentMode === 'COD'
                                            ? 0
                                            : testDetail.itemDetails.rate -
                                              discAmt,
                                    Rate: testDetail.itemDetails.rate,
                                    SubCategoryID:
                                        testDetail.itemDetails.SubCategoryID,
                                    TestCode: testDetail.itemDetails.itemcode,
                                    Coupon_DiscAmt_247: '0.00',
                                    GroupPlan_DiscAmt_247: '0.00',
                                    GroupPlan_247: '',
                                };
                            },
                        ),
                    ),
                    IsPaid: paymentMode === 'COD' ? 0 : 1,
                    CouponCode_247: body.couponCode || order.coupon_code || '',
                    Iscorporate: 0,
                    IsCircle: '0',
                    LocalityID_Serviceable: bookSlotData?.areaId || 60958,
                    SubOrderID: orderPatient.sub_order_id,
                    PrebookingID_Digital: order.prebooking_id_digital,
                    Txnid: body?.txnid,
                };
            }),
        );

        // Prepare HomeCollectionChargeData
        const HomeCollectionChargeData: HomeCollectionChargeDataType[] = [];
        order.orderPatients.forEach((patient) => {
            patient.testDetailEntity.forEach(() => {
                const isDuplicate = HomeCollectionChargeData.some(
                    (data) =>
                        data.ItemID == 2048 &&
                        data.ItemName === 'COLLECTION_CHARGES',
                );
                if (!isDuplicate) {
                    HomeCollectionChargeData.push({
                        Amount: order.home_collection_charges,
                        DiscAmt: 0, //order?.discount_amt
                        NetAmount: order.home_collection_charges,
                        ItemID: 2048,
                        ItemName: 'COLLECTION_CHARGES',
                        Coupon_DiscAmt_247: 0,
                        GroupPlan_DiscAmt_247: 0,
                        GroupPlan_247: '',
                    });
                }
            });
        });

        // Prepare CouponData
        const CouponData: any[] = [];
        if (body.tests && body.couponCode) {
            body.tests.forEach((test: any) => {
                CouponData.push({
                    UniqueID: body?.uniqueId || order?.unique_id,
                    CouponCode: body?.couponCode || order?.coupon_code,
                    ItemID: test?.itemid,
                    Rate: test?.rate,
                    DiscAmt: test?.discamount,
                });
            });
        } else if (order?.coupon_code) {
            this.logger.info(
                'inside success payment method coupon prep(payU cLient)',
            );
            // Fetch coupon and test details from DB as fallback
            const dbTests = await this.paymentRepository.findTestsByOrderId(
                orderId,
            );
            const dbCouponCode = order?.coupon_code;

            dbTests.forEach((test: any) => {
                CouponData.push({
                    UniqueID: order.unique_id,
                    CouponCode: dbCouponCode,
                    ItemID: test?.itemDetails?.itemid,
                    Rate: test?.itemDetails?.rate,
                    DiscAmt: test.disc_amt,
                });
            });
        } else {
            this.logger.info('Coupon functionality not selected..');
        }

        this.logger.info('Payloads prepared:', {
            HomeCollectionData,
            HomeCollectionChargeData,
            CouponData,
        });

        try {
            // Call external service with all payloads
            const res = await this.apolloHlService.bookHomeCollection({
                HomeCollectionData,
                HomeCollectionChargeData,
                CouponData,
            });

            if (!Array.isArray(res?.data)) {
                throw new Error(res?.message);
            }

            const patientPreBookingIds = res.data.map((val: any) => {
                return {
                    preBookingId: val.PrebookingID,
                    patientId: val.Patient_ID,
                };
            });

            if (!patientPreBookingIds || !orderId) {
                throw new Error(
                    'Invalid data: patientPreBookingIds or orderId is missing',
                );
            }

            // Update preBookingIds in the database
            await Promise.all(
                patientPreBookingIds.map(async (entry: any) => {
                    if (!entry.preBookingId || !entry.patientId) {
                        this.logger.error('Invalid entry:', entry);
                        throw new Error('Invalid data for update operation');
                    }
                    await OrderPatientEntity.update(
                        { prebooking_id: entry.preBookingId },
                        {
                            where: {
                                patient_id: entry.patientId,
                                order_id: orderId,
                            },
                        },
                    );
                }),
            );

            const preBookingId = patientPreBookingIds[0].preBookingId;
            await this.storeData(patients[0], addressId, orderId, preBookingId);
            return true;
        } catch (error) {
            console.log('-------------------------------', error);

            this.logger.error('Error in successPayment:', error);
            throw new BadRequestException(error);
        }
    }

    formatDate(dateString: any) {
        if (!dateString) {
            return '01-01-2000';
        }

        // Check if the date is in yyyy-mm-dd format
        if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
            return dateString; // Return as is
        }

        // Check if the date is in yyyy/mm/dd format and convert it to yyyy-mm-dd
        if (/^\d{4}\/\d{2}\/\d{2}$/.test(dateString)) {
            return dateString.replace(/\//g, '-'); // Convert slashes to dashes
        }

        // Check if the date is in the format "Thu Aug 07 00:00:00 IST 1986"
        if (
            /[a-zA-Z]{3} [a-zA-Z]{3} \d{2} \d{2}:\d{2}:\d{2} [A-Z]{3} \d{4}/.test(
                dateString,
            )
        ) {
            const months: any = {
                Jan: '01',
                Feb: '02',
                Mar: '03',
                Apr: '04',
                May: '05',
                Jun: '06',
                Jul: '07',
                Aug: '08',
                Sep: '09',
                Oct: '10',
                Nov: '11',
                Dec: '12',
            };
            const parts = dateString.split(' ');
            const year = parts[5];
            const month = months[parts[1]];
            const day = parts[2].padStart(2, '0'); // Ensure day is 2 digits
            return `${year}-${month}-${day}`;
        }

        // Check if the date is in dd/mm/yy format
        if (/^\d{2}\/\d{2}\/\d{2}$/.test(dateString)) {
            const [day, month, year] = dateString.split('/');
            const fullYear = `20${year}`; // Assume 20xx for yy (adjust based on your needs)
            return `${fullYear}-${month}-${day}`;
        }

        // Check if the date is in dd-mm-yy format
        if (/^\d{2}-\d{2}-\d{2}$/.test(dateString)) {
            const [day, month, year] = dateString.split('-');
            const fullYear = `20${year}`; // Assume 20xx for yy (adjust based on your needs)
            return `${fullYear}-${month}-${day}`;
        }

        return dateString;
    }
    async failedPayment(body: any) {
        const order = await this.paymentRepository.findOrder(body.udf1);

        if (order) {
            return await OrderEntity.update(
                { payment_status: 'failed' },
                { where: { id: order.id } },
            );
        }
    }

    async checkDuplicates(info: InitiatePaymentDto) {
        const patientsInfo = info.patientInfo;
        for (let i = 0; i < patientsInfo.length; i++) {
            const uniqueTests: number[] = [];
            const test = patientsInfo[i].testDetails;
            for (let j = 0; j < test.length; j++) {
                if (uniqueTests.includes(test[j].itemId)) {
                    return test[j].itemId;
                } else {
                    uniqueTests.push(test[j].itemId);
                }
            }
            const itemInclusionQueryDto = plainToInstance(
                ItemInclusionQueryDto,
                { ItemIDList: uniqueTests.toString() },
            );
            const itemInclusion = await this.itemInclusionService.itemInclusion(
                itemInclusionQueryDto,
            );

            const data = await itemInclusion.data;
            const itemMap = new Map();

            data.forEach((dataInfo: any) => {
                const { TestParametersObj } = dataInfo;
                TestParametersObj.forEach((test: any) => {
                    const testId = test.ParameterID;
                    const testName = test.ParameterName;

                    if (itemMap.get(testId)) {
                        return testId;
                    } else {
                        itemMap.set(testId, testName);
                    }
                });
            });
        }

        return 0;
    }

    async getBlockSlotData(
        info: InitiatePaymentDto,
        address: Address,
        user: UserProfile,
    ) {
        const patients = info.patientInfo.map(async (patient: any) => {
            const user = await UhidProfile.findOne({
                where: { profileId: patient.patientId },
            });
            return {
                patientName: user.firstname,
                uhid: user.uhid,
            };
        });

        const data = await Promise.all([...patients]);
        const slots = [
            {
                time: new Date(info.appointmentTime).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                }),
                patientDetails: data,
            },
        ];

        const dateOnly = info.appointmentTime.split(' ')[0];

        const formattedDate = dateOnly
            .split('-')
            .map((part: any) => parseInt(part))
            .join('-');
        const blockSlotData = {
            lat: address.lat,
            lng: address.lng,
            minMaxRadius: 1,
            address: address.address,
            sessionId: SESSION.SESSION_ID,
            slotDate: formattedDate,
            deviceId: DEVICE.DEVICE_ID,
            mobile: user.mobilenumber,
            slots: slots,
        };

        return blockSlotData;
    }

    async storeData(
        patientId: number,
        addressId: number,
        orderId: number,
        preBookingId: number,
    ) {
        const patient = await this.paymentRepository.findUser(patientId);

        const address = await this.paymentRepository.findAddress(addressId);
        const order = await this.paymentRepository.findOrder(orderId);
        const dob = this.formatDate(patient.dob);

        const obj = {
            order_id: orderId.toString(),
            user_id: patientId,
            collection_type: 0,
            title: patient?.title || 'Mr',
            patient_first_name: patient?.firstname || 'Guest',
            patient_last_name: patient?.lastname || 'Guest',
            gender: patient?.gender || 'male',
            age: patient?.age || '24',
            email: patient?.email || 'apollo@gmail.com',
            date_of_birth: dob,
            mobile_number: patient?.mobilenumber || '8197771760',
            preferred_date: this.getTodayDate(),
            house_number: address?.address || 'Delhi',
            street: address?.areaName || 'Noida',
            city: address?.cityName || 'Sector 2',
            pin_code: +address?.pincode || 600097,
            pre_booking_id: preBookingId,
            total_amount: order.total_amount,
            payment_status: 0,
            Alternatemobileno: patient?.mobilenumber,
            LocalityID: address?.areaId || 60958,
            Paymentmode: order?.payment_type || 'COD',
            StateID: address?.state || '9',
            state: address?.stateName || 'Delhi',
            transaction_fee: 0.0,
            cityID: address?.city || '9',
            IsPrimaryMember: 0,
        };

        try {
            await this.paymentRepository.createCart(obj);
        } catch (error) {
            this.logger.error('Printing error of creating old cart:', error);
            throw new BadRequestException(error);
        }
    }

    getTodayDate(): string {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(today.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    async validateCoupon(
        couponValidationRequest: CouponValidationRequestDto,
    ): Promise<any> {
        this.logger.info(
            'Validating coupon with data in service method:',
            JSON.stringify(couponValidationRequest, null, 2),
        );

        const { patientInfo, Coupons, MobileNo } = couponValidationRequest;

        // array for third party validate payload
        const tests: any[] = [];
        let grossAmount = 0;

        // filling of the array payload
        for (const patient of patientInfo) {
            for (const testDetail of patient.testDetails) {
                const item = await this.paymentRepository.findItem(
                    testDetail.itemId,
                    testDetail.cityId,
                );

                if (!item) {
                    this.logger.error(
                        `Item not found for itemId: ${testDetail.itemId} and cityId: ${testDetail.cityId}`,
                    );
                    throw new Error(
                        `Item not found for itemId: ${testDetail.itemId}`,
                    );
                }

                const itemData = item.toJSON();
                console.log('*********************', { itemData });

                // pushing into the main array
                tests.push({
                    ItemID: testDetail.itemId.toString(),
                    ItemName: itemData.itemname,
                    Rate: itemData.rate,
                });

                // grossAmt Calculation
                grossAmount += itemData.rate;
            }
        }

        // Build the final payload for the validateCoupon API
        const apiPayload = {
            Coupons: Coupons.map((coupon: CouponDto) => ({
                CouponCode: coupon.CouponCode,
            })),
            GrossAmount: grossAmount.toString(),
            MobileNo: MobileNo.replace('+91', ''),
            Tests: tests,
        };

        this.logger.info(
            'Prepared data for validateCoupon API:',
            JSON.stringify(apiPayload, null, 2),
        );

        // Call the third-party validateCoupon API
        const data = await this.uatLimsApollo.verifyCoupon(apiPayload);

        this.logger.info(
            'Response from validateCoupon API:',
            JSON.stringify(data, null, 2),
        );

        return data;
    }
}
