import { Module } from '@nestjs/common';
import { TestimonialController } from './controller/testimonial.controller';
import { TestimonialService } from './service/testimonial.service';
import { TestimonialRepository } from './repository/testimonial.repository';

@Module({
    controllers: [TestimonialController],
    providers: [TestimonialService, TestimonialRepository],
    exports: [TestimonialRepository],
})
export class TestimonialModule {}
