import { Injectable } from '@nestjs/common';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { Op } from 'sequelize';
import { ItemDetails } from '../entity/item_details.entity';
import { TestHasPopularCategories } from '../entity/test_has_popularcategories';
import { ITEM_ERROR } from 'src/constants/error';
import { TestHasConditions } from '../entity/test_has_conditions.entity';
import { ItemQueryDto } from '../dto/item_query.dto';
import { Condition } from 'src/module/master/entity/condition.entity';
import { Location } from 'src/module/master/entity/location.entity';
import { CITY_ERROR } from 'src/constants/error/errors/city';
import { Discount } from '../entity/discount.entity';

@Injectable()
export class TestRepository {
    async getAllItem(obj: ItemQueryDto) {
        const {
            popularCategoryId,
            conditionId,
            cityId,
            itemId,
            type,
            search,
            cityName,
            slug,
            conditionName,
            limit,
            offset,
        } = obj;

        const whereClause: any = {};

        // Add search condition
        if (search) {
            whereClause[Op.or] = [
                { itemname: { [Op.like]: `%${search}%` } },
                { synonyms_for_test: { [Op.like]: `%${search}%` } },
            ];
        }

        // Add cityId condition
        if (cityId) {
            whereClause.city_id = cityId;
        }

        // Add item type condition
        if (type) {
            whereClause.item_type = type;
        }

        // Add itemId condition
        if (itemId) {
            whereClause.itemid = itemId;
        }

        // Add slug condition
        if (slug) {
            whereClause.slug = slug;
        }

        // Handle popularCategoryId
        if (popularCategoryId) {
            const popularCategory = await TestHasPopularCategories.findAll({
                where: { condition_id: { [Op.in]: popularCategoryId } },
                attributes: ['test_id'],
                raw: true,
            });

            const testIds = popularCategory.map((entity) => entity.test_id);
            whereClause.id = { [Op.in]: testIds };
        }

        // Handle conditionId
        if (conditionId) {
            const conditions = await TestHasConditions.findAll({
                where: { condition_id: { [Op.in]: conditionId } },
                attributes: ['test_id'],
                raw: true,
            });

            const testIds = conditions.map((entity) => entity.test_id);
            whereClause.id = { [Op.in]: testIds };
        }

        // Handle conditionName and cityId
        if (conditionName && cityId) {
            const conditions = await Condition.findAll({
                where: { name: { [Op.in]: conditionName }, city_id: cityId },
                attributes: ['id'],
                raw: true,
            });

            const conditionIds = conditions.map((entity) => entity.id);
            const testHasConditions = await TestHasConditions.findAll({
                where: { condition_id: { [Op.in]: conditionIds } },
                attributes: ['test_id'],
                raw: true,
            });

            const testIds = testHasConditions.map((entity) => entity.test_id);
            whereClause.id = { [Op.in]: testIds };
        }

        // Handle conditionName and cityName
        if (conditionName && cityName) {
            const city = await Location.findOne({
                where: { City: { [Op.like]: cityName } },
                attributes: ['CityID'],
                raw: true,
            });

            if (!city) {
                throw new HttpExceptionWrapper(CITY_ERROR.CITY_NOT_FOUND);
            }

            const conditions = await Condition.findAll({
                where: {
                    name: { [Op.in]: conditionName },
                    city_id: city.CityID,
                },
                attributes: ['id'],
                raw: true,
            });

            const conditionIds = conditions.map((entity) => entity.id);
            const testHasConditions = await TestHasConditions.findAll({
                where: { condition_id: { [Op.in]: conditionIds } },
                attributes: ['test_id'],
                raw: true,
            });

            const testIds = testHasConditions.map((entity) => entity.test_id);
            whereClause.id = { [Op.in]: testIds };
        }

        // to filter out the items which has rate:0
        whereClause.rate = { [Op.ne]: 0 };

        // Fetch items with dynamic whereClause
        const { rows, count } = await ItemDetails.findAndCountAll({
            where: whereClause,
            group: ['itemid', 'city_id'],
            order: [
                ['priority', 'DESC'],
                ['itemname', 'ASC'],
            ],
            limit: limit,
            offset: offset,
            raw: true,
        });

        const transformedRows = rows.map((row) => ({
            ...row,
            card_data: row.card_data ? JSON.parse(row.card_data) : [],
        }));
        const uniqueCount = Array.isArray(count) ? count.length : count;

        return {
            data: {
                count: uniqueCount,
                rows: transformedRows,
            },
        };
    }

    async getGlobalDiscount() {
        return await Discount.findAll({
            attributes: ['discount'],
        });
    }

    async getItemById(id: number) {
        const item = await ItemDetails.findAndCountAll({
            where: { id: id },
        });

        if (!item) {
            throw new HttpExceptionWrapper(ITEM_ERROR.DATA_NOT_FOUND);
        }

        item.rows.map((row) => {
            row.card_data = JSON.parse(row?.card_data ?? '[]');
        });

        return item;
    }
}
