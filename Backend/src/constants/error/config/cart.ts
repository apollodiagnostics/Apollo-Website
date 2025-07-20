import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { CART_ERROR } from '../errors/cart';

export const CART_ERROR_CONFIG: ErrorConfig<CART_ERROR> = {
    [CART_ERROR.CART_DETAILS_NOT_FOUND]: {
        message: 'Cart details not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'CART_NOT_FOUND_ERROR',
    },

    [CART_ERROR.ITEM_NOT_FOUND]: {
        message: 'Item  not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'ITEM_NOT_FOUND_ERROR',
    },
};
