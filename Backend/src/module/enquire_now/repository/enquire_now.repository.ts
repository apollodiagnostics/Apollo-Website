import { Injectable } from '@nestjs/common';
import { EnquireDto } from '../dto/enquire_now.dto';
import { Enquire } from '../entity/enquire_now.entity';
import { ENQUIRE_ERROR } from 'src/constants/error';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';

@Injectable()
export class EnquireRepository {
    async enquire(obj: EnquireDto) {
        try {
            const createdEnquiry = await Enquire.create(obj);
            return createdEnquiry;
        } catch (error) {
            throw new HttpExceptionWrapper(ENQUIRE_ERROR.USER_NOT_CREATEd);
        }
    }
}
