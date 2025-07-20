import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const TestimonialResponseName = {
    GET_TESTIMONIAL: 'GET_TESTIMONIAL',
    GET_ALL_TESTIMONIAL: 'GET_ALL_TESTIMONIAL',
};

export const TestimonialResponseInfo: Record<string, IResponseStatusMessage> = {
    GET_TESTIMONIAL: {
        message: 'Fetch testimonial details successfully',
        statusCode: HttpStatus.OK,
    },

    GET_ALL_TESTIMONIAL: {
        message: 'Fetch all testimonial details successfully',
        statusCode: HttpStatus.OK,
    },
};
