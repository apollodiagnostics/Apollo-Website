import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { CENTER_ERROR } from '../errors/center';

export const CENTER_ERROR_CONFIG: ErrorConfig<CENTER_ERROR> = {
    [CENTER_ERROR.CENTRE_NOT_FOUND]: {
        message: 'Center not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'CENTER_NOT_FOUND_ERROR',
    },
};
