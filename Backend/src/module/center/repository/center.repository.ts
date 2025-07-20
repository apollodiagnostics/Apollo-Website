import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { CENTER_ERROR } from 'src/constants/error';
import { Center } from '../entity/center.entity';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { Sequelize } from 'sequelize-typescript';
import { Reviews } from '../entity/reviews.entity';
import { CenterQueryDto } from '../dto/center_query.dto';

@Injectable()
export class CenterRepository {
    constructor(@Inject('SEQUELIZE') private readonly sequelize: Sequelize) {}
    async searchAllCenter(info: CenterQueryDto) {
        const { state, city, locality, search, slug, limit, offset } = info;
        {
            if (search) {
                return await Center.findAndCountAll({
                    where: {
                        locality: {
                            [Op.like]: `%${search}%`,
                        },
                    },
                    limit: limit,
                    offset: offset,
                });
            }
            const center = await Center.findAndCountAll({
                where: {
                    ...(state && { state_id: { [Op.eq]: state } }),
                    ...(city && { city_id: { [Op.eq]: city } }),
                    ...(slug && { slug: { [Op.eq]: slug } }),
                    ...(locality && { locality: { [Op.eq]: locality } }),
                },
                limit: limit,
                offset: offset,
            });
            if (!center)
                throw new HttpExceptionWrapper(CENTER_ERROR.CENTRE_NOT_FOUND);
            else return center;
        }
    }

    async searchCenterById(centerId: number) {
        const center = await Center.findOne({
            where: { id: centerId },
            raw: true,
        });
        const reviews = await Reviews.findOne({
            where: { centreId: centerId },
            raw: true,
        });
        if (!center || !reviews) {
            throw new HttpExceptionWrapper(CENTER_ERROR.CENTRE_NOT_FOUND);
        }

        const result = { ...center, ...reviews };
        return result;
    }
}
