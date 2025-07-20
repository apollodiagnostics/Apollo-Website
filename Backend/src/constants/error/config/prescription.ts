import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { PRESCRIPTION_ERROR } from '../errors/prescription';

export const PRESCRIPTION_ERROR_CONFIG: ErrorConfig<PRESCRIPTION_ERROR> = {
    [PRESCRIPTION_ERROR.USER_NOT_FOUND]: {
        message: 'User  not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'USER_NOT_FOUND_ERROR',
    },
};
