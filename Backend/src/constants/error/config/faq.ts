import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { FAQ_ERROR } from '../errors/faq';

export const FAQ_ERROR_CONFIG: ErrorConfig<FAQ_ERROR> = {
    [FAQ_ERROR.DATA_NOT_FOUND]: {
        message: 'Faq  not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'FAQ_NOT_FOUND_ERROR',
    },
};
