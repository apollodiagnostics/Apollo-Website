import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { CAREER_ERROR } from '../errors/career';

export const CAREER_ERROR_CONFIG: ErrorConfig<CAREER_ERROR> = {
    [CAREER_ERROR.RECORD_NOT_FOUND]: {
        message: 'Record not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'RECORD_NOT_FOUND_ERROR',
    },
};
