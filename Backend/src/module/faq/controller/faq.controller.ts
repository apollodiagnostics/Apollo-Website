import { Controller, Get, Param, Query } from '@nestjs/common';
import { FaqService } from '../service/faq.service';
import { FaqQueryDto } from '../dto/faq_query.dto';
import { FaqParamDto } from '../dto/faq_param.dto';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';
@Controller()
export class FaqController {
    constructor(private faqService: FaqService) {}
    @Get()
    @ResponseCustom(responseName.ALL_FAQS_FETCHED)
    async getAllFaq(@Query() info: FaqQueryDto) {
        return await this.faqService.getAllFaqs(info.limit, info.offset);
    }

    @Get(':id')
    @ResponseCustom(responseName.FAQ_FETCHED)
    async getFaqById(@Param() param: FaqParamDto) {
        return await this.faqService.getFaqById(param.id);
    }
}
