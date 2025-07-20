import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { ITEM_ERROR } from '../errors/item';

export const ITEM_ERROR_CONFIG: ErrorConfig<ITEM_ERROR> = {
    [ITEM_ERROR.DATA_NOT_FOUND]: {
        message: 'Item not found',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'DATA_NOT_FOUND_ERROR',
    },
    [ITEM_ERROR.SERVICE_UNAVAILABLE]: {
        message:
            'The service is currently unavailable. Please try again later.',
        statusCode: HttpStatus.SERVICE_UNAVAILABLE,
        errorCode: 'BAD_REQUEST_ERROR',
    },
    [ITEM_ERROR.NO_SLOTS_AVAILABLE]: {
        message: 'No available slots at the selected location and time.',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'NOT_FOUND_ERROR',
    },
};
