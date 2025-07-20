import { Injectable } from '@nestjs/common';
import { TestimonialRepository } from '../repository/testimonial.repository';
import { TestimonialDto } from '../dto/create-testimonial.dto';

@Injectable()
export class TestimonialService {
    constructor(
        private readonly testimonialRepository: TestimonialRepository,
    ) {}
    async getAllTestimonial(options: TestimonialDto) {
        return await this.testimonialRepository.findAllTestimonialDetails(
            options,
        );
    }

    async getTestimonialById(id: number) {
        const testimonial =
            await this.testimonialRepository.findTestimonialById(id);
        return testimonial;
    }
}
