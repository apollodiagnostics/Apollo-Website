import { Injectable } from '@nestjs/common';
import { CategoryDto } from '../dto/category.dto';
import { LocationDto } from '../dto/location.dto';
import { Category } from '../entity/category.entity';
import { Condition } from '../entity/condition.entity';
import { Location } from '../entity/location.entity';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { MASTER_ERROR } from 'src/constants/error';
import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';

@Injectable()
export class MasterRepository {
    constructor() {}

    //Get all PopularCategory
    async getAllCategory(options: CategoryDto) {
        return await Category.findAll({
            where: {
                ...(options.cityId && { city_id: { [Op.eq]: options.cityId } }),
                ...(options.categoryType && {
                    categorytype: { [Op.eq]: options.categoryType },
                }),
            },
            limit: options.limit,
            offset: options.offset,
        });
    }

    //Get Category by id
    async getCategoryById(id: number) {
        const category = await Category.findOne({ where: { id: id } });

        if (!category)
            throw new HttpExceptionWrapper(MASTER_ERROR.CATEGORY_NOT_FOUND);

        return { dataValues: category };
    }

    //Get all Locations
    async getAllLocations(options: LocationDto) {
        return await Location.findAndCountAll({
            ...(options.areaId && { where: { AreaID: options.areaId } }),
            ...(options.cityId && { where: { CityID: options.cityId } }),

            attributes: { exclude: ['created_at', 'updated_at'] },
            limit: options.limit || 1000,
            offset: options.offset || 0,
        });
    }

    //Get all states
    async getAllSates(limit: number, offset: number) {
        const records = await Location.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('State')), 'State'],
                'StateID',
            ],
            limit: limit,
            offset: offset,
            order: [['State', 'ASC']],
            raw: true,
        });

        // Then, run a separate query to count the distinct states

        const newRecords = records.map((val) => {
            return {
                id: val.StateID,
                state: val.State,
            };
        });
        const distinctCount = await Location.count({
            distinct: true,
            col: 'State',
        });

        // Combine the result to mimic `findAndCountAll`
        return {
            count: distinctCount,
            rows: newRecords,
        };
    }

    async getStatebyId(id: number) {
        const state = await Location.findOne({ where: { StateID: id } });

        if (!state)
            throw new HttpExceptionWrapper(MASTER_ERROR.LOCATION_NOT_FOUND);

        return state;
    }

    async getAllCities(
        cityId: number,
        stateId: number,
        limit: number,
        offset: number,
    ) {
        if (stateId) {
            return await Location.findAndCountAll({
                where: { StateID: stateId },
                attributes: [
                    [Sequelize.fn('DISTINCT', Sequelize.col('City')), 'City'],
                    'CityID',
                ],
                limit: limit,
                offset: offset,
                order: [['City', 'ASC']],
                raw: true,
            });
        }

        return await Location.findAndCountAll({
            where: {
                ...(stateId && { StateID: { [Op.eq]: stateId } }),
                ...(cityId && { CityID: { [Op.eq]: cityId } }),
            },
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('City')), 'City'],
                'CityID',
            ],

            limit: limit,
            offset: offset,
            order: [['City', 'ASC']],
            raw: true,
        });
    }

    async getAllConditionDetails(
        slug: string,
        cityId: number,
        stateId: number,
        limitNum: number,
        offsetNum: number,
    ) {
        return await Condition.findAll({
            where: {
                ...(cityId && { city_id: { [Op.eq]: cityId } }),
                ...(stateId && { state_id: { [Op.eq]: stateId } }),
                ...(slug && { slug: { [Op.eq]: slug } }),
            },
            limit: limitNum,
            offset: offsetNum,
        });
    }

    async getConditionById(id: number) {
        const condition = await Condition.findOne({ where: { id: id } });
        if (!condition) {
            throw new HttpExceptionWrapper(
                MASTER_ERROR.HEALTH_DETAILS_NOT_FOUND,
            );
        }
        return condition;
    }
}
