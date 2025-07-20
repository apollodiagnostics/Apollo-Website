import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { OrderEntity } from '../entity/order.entity';
import { OrderPatientEntity } from '../entity/order_patient.entity';
import { TestDetailEntity } from '../entity/test_detail.entity';
import { ItemDetails } from 'src/module/item/entity/item_details.entity';
import { Address } from 'src/module/user-uhid-profile/entity/address.entity';
import { UhidProfile } from 'src/module/user-uhid-profile/entity/uhid_profile.entity';
import { RescheduleDto } from '../dto/reshedule_home_collection.dto';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { UHID_PROFILE_ERROR } from 'src/constants/error';
import { CancelHomeCollectionDto } from '../dto/cancel_home_collection.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class HomeCollectionRepository {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER)
        private readonly logger: Logger,
    ) {}

    async CreateOrder(obj: any) {
        return await OrderEntity.create(obj);
    }

    async CreateOrderPatientMapper(obj: any) {
        return await OrderPatientEntity.bulkCreate(obj);
    }

    async CreateTestDetail(obj: any) {
        return await TestDetailEntity.bulkCreate(obj);
    }

    async FindItem(itemId: number, cityId: number) {
        return await ItemDetails.findOne({
            where: { itemid: itemId, city_id: cityId },
        });
    }

    async getAllHomeCollection(mobileNumber: string) {
        return await OrderEntity.findAndCountAll({
            where: { mobile_number: mobileNumber },
            include: [
                {
                    model: Address,
                    attributes: [
                        'countryName',
                        'stateName',
                        'cityName',
                        'areaName',
                        'lat',
                        'lng',
                        'landmark',
                    ],
                },
                {
                    model: OrderPatientEntity,
                    include: [
                        {
                            model: UhidProfile,
                            attributes: [
                                'firstname',
                                'lastname',
                                'email',
                                'dob',
                                'age',
                                'gender',
                                'mobilenumber',
                            ],
                            paranoid: true,
                        },
                        {
                            model: TestDetailEntity,
                            include: [
                                {
                                    model: ItemDetails,
                                },
                            ],
                        },
                    ],
                },
            ],
            order: [['id', 'DESC']],
        });
    }

    async rescheduleHomeCollection(info: RescheduleDto) {
        try {
            const patientInfo = await OrderPatientEntity.findOne({
                where: { prebooking_id: info.preBookingId },
            });
            if (!patientInfo) {
                throw new HttpExceptionWrapper(
                    UHID_PROFILE_ERROR.PROFILE_NOT_FOUND,
                );
            }

            const dateString = info.newAppDate;

            const [day, month, year, time] = dateString.split(/[-\s]+/);

            const months: any = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11,
            };

            const date = new Date(
                Date.UTC(
                    parseInt(year),
                    months[month],
                    parseInt(day),
                    parseInt(time.split(':')[0]),
                    parseInt(time.split(':')[1]),
                ),
            );

            await patientInfo.update({ appointment_time: date });
        } catch (err) {
            this.logger.info('Error in reschedule home collection', { err });
            throw new BadRequestException(err);
        }
    }

    async cancelHomeCollection(info: CancelHomeCollectionDto) {
        const patientInfo = await OrderPatientEntity.findOne({
            where: { prebooking_id: info.preBookingId },
        });

        if (!patientInfo) {
            throw new HttpExceptionWrapper(
                UHID_PROFILE_ERROR.PROFILE_NOT_FOUND,
            );
        }

        await patientInfo.update({ is_canceled: true });
    }
}
