import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { HOME_COLLECTION_ERROR } from '../errors/home_collection';

export const HOME_COLLECTION_ERROR_CONFIG: ErrorConfig<HOME_COLLECTION_ERROR> =
    {
        [HOME_COLLECTION_ERROR.HOME_COLLECTION_ERROR]: {
            message: 'Home collection could not created',
            statusCode: HttpStatus.NOT_FOUND,
            errorCode: 'HOME_COLLECTION_NOT_CREATED_ERROR',
        },
        [HOME_COLLECTION_ERROR.COUPON_NOT_VALIDATED]: {
            message: 'Coupon validation unsuccessful.',
            statusCode: HttpStatus.BAD_REQUEST,
            errorCode: 'COUPON_NOT_VALIDATED_ERROR',
        },
    };
