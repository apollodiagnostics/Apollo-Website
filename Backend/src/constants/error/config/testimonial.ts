import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { TESTIMONIAL_ERROR } from '../errors/testimonial';

export const TESTIMONIAL_ERROR_CONFIG: ErrorConfig<TESTIMONIAL_ERROR> = {
    [TESTIMONIAL_ERROR.TESTIMONIAL_DETAILS_NOT_FOUND]: {
        message: 'Testimonial details not exist',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'TESTIMONIAL_DETAILS_NOT_FOUND_ERROR',
    },
};
