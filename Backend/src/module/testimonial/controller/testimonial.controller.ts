import { Controller, Get, Param, Query } from '@nestjs/common';
import { TestimonialDto } from '../dto/create-testimonial.dto';
import { TestimonialService } from '../service/testimonial.service';
import { Response as ResponseCustom } from '../../../utils/response/response.decorator';
import { responseName } from 'src/constants/response';
@Controller()
export class TestimonialController {
    constructor(private readonly testimonialService: TestimonialService) {}

    @Get()
    @ResponseCustom(responseName.GET_ALL_TESTIMONIAL)
    async findAllTestimonials(@Query() query: TestimonialDto) {
        return await this.testimonialService.getAllTestimonial(query);
    }

    @Get('/:id')
    @ResponseCustom(responseName.GET_TESTIMONIAL)
    async findAllTestimonialsById(@Param() param: TestimonialDto) {
        return await this.testimonialService.getTestimonialById(param.id);
    }
}
