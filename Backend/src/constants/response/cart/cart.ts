import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const cartResponseName = {
    GET_ALL_CARTS: 'GET_ALL_CARTS',
    GET_CART: 'GET_CART',
    CART_ITEM_ADDED: 'CART_ITEM_ADDED',
    CART_ITEM_REMOVED: 'CART_ITEM_REMOVED',
};

export const cartResponseInfo: Record<string, IResponseStatusMessage> = {
    GET_ALL_CARTS: {
        message: 'All cart details fetched sucessfully',
        statusCode: HttpStatus.OK,
    },

    GET_CART: {
        message: ' Cart detail fetched sucessfully',
        statusCode: HttpStatus.OK,
    },

    CART_CREATED: {
        message: ' Cart created sucessfully',
        statusCode: HttpStatus.CREATED,
    },

    CART_ITEM_REMOVED: {
        message: ' Cart item removed sucessfully',
        statusCode: HttpStatus.OK,
    },
};
