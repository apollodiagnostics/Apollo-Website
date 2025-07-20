import { Injectable } from '@nestjs/common';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { Accreditation } from '../entity/accreditation.entity';
import { ACCREDITATION_ERROR } from 'src/constants/error';

@Injectable()
export class AccreditationRepository {
    async getAllAccreditation(limitNum: number, offsetNum: number) {
        return await Accreditation.findAndCountAll({
            limit: limitNum,
            offset: offsetNum,
        });
    }

    async getAccreditationById(accreditationId: number) {
        const accreditation = await Accreditation.findOne({
            where: { id: accreditationId },
        });

        if (!accreditation) {
            throw new HttpExceptionWrapper(ACCREDITATION_ERROR.DATA_NOT_FOUND);
        }

        return accreditation;
    }
}
