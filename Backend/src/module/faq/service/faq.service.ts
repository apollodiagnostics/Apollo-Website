import { Injectable } from '@nestjs/common';
import { FaqRepository } from '../repository/faq.repository';

@Injectable()
export class FaqService {
    constructor(private faqRepository: FaqRepository) {}
    async getAllFaqs(limit: number, offset: number) {
        return await this.faqRepository.getAllFaqs(limit, offset);
    }

    async getFaqById(id: number) {
        return await this.faqRepository.getFaqById(id);
    }
}
