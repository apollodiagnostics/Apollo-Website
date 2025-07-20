import { Injectable } from '@nestjs/common';
import { Career } from '../entity/career.entity';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { CAREER_ERROR } from 'src/constants/error';

@Injectable()
export class CareerRepository {
    async getAllCareer(limitNum: number, offsetNum: number) {
        return await Career.findAndCountAll({
            limit: limitNum,
            offset: offsetNum,
        });
    }

    async getCareerById(careerId: number) {
        const career = await Career.findOne({ where: { id: careerId } });

        if (!career) {
            throw new HttpExceptionWrapper(CAREER_ERROR.RECORD_NOT_FOUND);
        }

        return career;
    }
}
