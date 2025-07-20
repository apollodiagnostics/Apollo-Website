import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { RESHEDULE_ERROR } from '../errors/reshedule_home_collection';

export const RESHEDULE_ERROR_CONFIG: ErrorConfig<RESHEDULE_ERROR> = {
    [RESHEDULE_ERROR.RECORD_NOT_FOUND]: {
        message: 'Record not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'RECORD_NOT_FOUND_ERROR',
    },
};
