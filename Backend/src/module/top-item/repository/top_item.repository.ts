import { Inject, Injectable } from '@nestjs/common';
import { TopPackage } from '../entity/top_item.entity';
import { Sequelize } from 'sequelize-typescript';
import { ItemDetails } from 'src/module/item/entity/item_details.entity';
import { Op } from 'sequelize';
@Injectable()
export class TopItemRepository {
    constructor(@Inject('SEQUELIZE') private readonly sequelize: Sequelize) {}
    async getAllTopPackage(
        cityId: number,
        itemId: number,
        itemType: string,
        search: string,
        limitNum: number,
        offsetNum: number,
    ) {
        if (search) {
            const topItem = await TopPackage.findAll({
                where: {
                    item_name: { [Op.like]: `%${search}%` },
                },
                limit: limitNum,
                offset: offsetNum,
            });

            const topItemIds = topItem.map((entity) => entity.item_id);
            const cityIds = topItem.map((entity) => entity.city_id);
            return await ItemDetails.findAll({
                where: { city_id: cityIds, itemid: topItemIds },
                group: ['itemid', 'city_id'],
                order: [['itemname', 'ASC']],
                limit: limitNum,
                offset: offsetNum,
            });
        }
        const topItems = await TopPackage.findAll({
            where: {
                ...(itemId && { item_id: { [Op.eq]: itemId } }),
                ...(cityId && { city_id: { [Op.eq]: cityId } }),
                ...(itemType && { item_type: { [Op.eq]: itemType } }),
            },
        });

        const itemIds = topItems.map((entity) => {
            return entity.item_id;
        });

        const cityIds = topItems.map((entity) => {
            return entity.city_id;
        });

        return await ItemDetails.findAll({
            where: { city_id: cityIds, itemid: itemIds, rate: { [Op.ne]: 0 } },
            group: ['itemid', 'city_id'],
            order: [['itemname', 'ASC']],
            limit: limitNum,
            offset: offsetNum,
        });
    }
}
