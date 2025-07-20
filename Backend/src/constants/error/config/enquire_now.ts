import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { ENQUIRE_ERROR } from '../errors/enquire_now';

export const ENQUIRE_ERROR_CONFIG: ErrorConfig<ENQUIRE_ERROR> = {
    [ENQUIRE_ERROR.USER_NOT_CREATEd]: {
        message: 'Enter valid data',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'USER_NOT_CREATED_ERROR',
    },
};
