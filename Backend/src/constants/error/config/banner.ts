import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { BANNER_ERROR } from '../errors/banner';

export const BANNER_ERROR_CONFIG: ErrorConfig<BANNER_ERROR> = {
    [BANNER_ERROR.DATA_NOT_FOUND]: {
        message: 'Banner not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'BANNER_NOT_FOUND_ERROR',
    },
};
