import { Injectable } from '@nestjs/common';
import { Faq } from '../entity/faq.entity';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { FAQ_ERROR } from 'src/constants/error';

@Injectable()
export class FaqRepository {
    async getAllFaqs(limitNum: number, offsetNum: number) {
        return await Faq.findAndCountAll({
            limit: limitNum,
            offset: offsetNum,
        });
    }

    async getFaqById(faqId: number) {
        const faq = await Faq.findOne({ where: { id: faqId } });

        if (!faq) {
            throw new HttpExceptionWrapper(FAQ_ERROR.DATA_NOT_FOUND);
        }

        return faq;
    }
}
