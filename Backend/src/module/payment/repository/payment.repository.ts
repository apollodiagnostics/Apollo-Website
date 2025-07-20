import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { OldCart } from 'src/module/home-collection/entity/old_cart.entity';
import { OrderEntity } from 'src/module/home-collection/entity/order.entity';
import { OrderPatientEntity } from 'src/module/home-collection/entity/order_patient.entity';
import { TestDetailEntity } from 'src/module/home-collection/entity/test_detail.entity';
import { ItemDetails } from 'src/module/item/entity/item_details.entity';
import { Address } from 'src/module/user-uhid-profile/entity/address.entity';
import { UhidProfile } from 'src/module/user-uhid-profile/entity/uhid_profile.entity';
import { Logger } from 'winston';

@Injectable()
export class PaymentRepository {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER)
        private readonly logger: Logger,
    ) {}
    async createOrder(obj: any) {
        return await OrderEntity.create(obj);
    }

    async createOrderPatientMapper(obj: any) {
        return await OrderPatientEntity.bulkCreate(obj);
    }

    async createTestDetail(obj: any) {
        return await TestDetailEntity.bulkCreate(obj);
    }

    async findItem(itemId: number, cityId: number) {
        return await ItemDetails.findOne({
            where: { itemid: itemId, city_id: cityId },
        });
    }

    async findTestsByOrderId(orderId: number): Promise<TestDetailEntity[]> {
        return TestDetailEntity.findAll({
            include: [
                {
                    model: OrderPatientEntity,
                    where: { order_id: orderId },
                },
                {
                    model: ItemDetails,
                },
            ],
        });
    }

    async findUser(id: number) {
        return await UhidProfile.findOne({
            where: { profileId: id },
        });
    }

    async findAddress(id: number) {
        return await Address.findOne({ where: { address_id: id } });
    }

    async findOrder(id: number) {
        return await OrderEntity.findOne({
            where: { id: id },
            include: [
                {
                    model: Address,
                    attributes: [
                        'pincode',
                        'lat',
                        'lng',
                        'areaName',
                        'address',
                    ],
                },
                {
                    model: OrderPatientEntity,
                    include: [
                        {
                            model: UhidProfile,
                        },
                        {
                            model: TestDetailEntity,
                            include: [
                                {
                                    model: ItemDetails,
                                    attributes: [
                                        'itemid',
                                        'itemname',
                                        'rate',
                                        'itemcode',
                                        'SubCategoryID',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        });
    }

    async updateOrder(id: number) {
        try {
            const order = await OrderEntity.findOne({ where: { id: id } });
            await order.update({ payment_status: 'success' });
        } catch (error) {
            this.logger.error(
                'Printing eroor in updation of payment status :',
                {
                    error,
                },
            );
        }
    }

    async getOrder(orderId: number) {
        return await OrderEntity.findOne({
            where: { id: orderId },
        });
    }

    async createCart(obj: any) {
        return await OldCart.create(obj);
    }
}
