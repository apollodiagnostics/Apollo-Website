import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { CONDITION_ERROR } from '../errors/condition';

export const CONDITION_ERROR_CONFIG: ErrorConfig<CONDITION_ERROR> = {
    [CONDITION_ERROR.CONDITION_NOT_FOUND]: {
        message: 'Condition not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'CONDITION_NOT_FOUND_ERROR',
    },
};
