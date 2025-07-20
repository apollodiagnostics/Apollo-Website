import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { CITY_ERROR } from '../errors/city';

export const CITY_ERROR_CONFIG: ErrorConfig<CITY_ERROR> = {
    [CITY_ERROR.CITY_NOT_FOUND]: {
        message: 'City not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'CITY_NOT_FOUND_ERROR',
    },
};
