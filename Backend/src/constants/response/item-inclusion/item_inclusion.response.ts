import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const itemInclusionResponseName = {
    GET_ALL_ITEMS: 'GET_ALL_ITEMS',
    GET_ITEM: 'GET_ITEM',
    GET_GLOBAL_DISCOUNT: 'GET_GLOBAL_DISCOUNT',
};

export const itemInclusionResponseInfo: Record<string, IResponseStatusMessage> =
    {
        GET_ALL_ITEMS: {
            message: 'All items fetched successfully',
            statusCode: HttpStatus.OK,
        },
        GET_ITEM: {
            message: ' Item fetched successfully',
            statusCode: HttpStatus.OK,
        },
        GET_GLOBAL_DISCOUNT: {
            message: 'Global Discount fetched successfully.',
            statusCode: HttpStatus.OK,
        },
    };
