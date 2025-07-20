import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { TEST_ERROR } from '../errors/test';

export const TEST_ERROR_CONFIG: ErrorConfig<TEST_ERROR> = {
    [TEST_ERROR.TEST_DETAILS_NOT_FOUND]: {
        message: 'Tests details not found ',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'TEST_DETAILS_NOT_FOUND_ERROR',
    },
    [TEST_ERROR.TEST_NOT_FOUND]: {
        message: 'Test not found ',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'TEST_DETAILS_NOT_FOUND_ERROR',
    },
};
