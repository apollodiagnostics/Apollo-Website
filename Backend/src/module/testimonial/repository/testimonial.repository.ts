import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { Testimonial } from '../entity/testimonial.entity';
import { TESTIMONIAL_ERROR } from 'src/constants/error';
import { TestimonialDto } from '../dto/create-testimonial.dto';

export class TestimonialRepository {
    async findAllTestimonialDetails(options: TestimonialDto) {
        const testimonials = await Testimonial.findAndCountAll({
            ...(options.id && { where: { id: options.id } }),
            attributes: {
                exclude: ['created_at', 'updated_at'],
            },
            limit: options.limit || 1000,
            offset: options.offset || 0,
        });
        return testimonials;
    }
    async findTestimonialById(id: number) {
        const testimonial = await Testimonial.findOne({
            where: { id },
            attributes: {
                exclude: ['created_at', 'updated_at'],
            },
        });
        if (!testimonial) {
            throw new HttpExceptionWrapper(
                TESTIMONIAL_ERROR.TESTIMONIAL_DETAILS_NOT_FOUND,
            );
        }
        return { testimonial };
    }
}
