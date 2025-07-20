import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const itemResponseName = {
    GET_ALL_ITEMS: 'GET_ALL_ITEMS',
    GET_ITEM: 'GET_ITEM',
};

export const itemResponseInfo: Record<string, IResponseStatusMessage> = {
    GET_ALL_ITEMS: {
        message: 'All items fetched successfully',
        statusCode: HttpStatus.OK,
    },
    GET_ITEM: {
        message: ' Item fetched successfully',
        statusCode: HttpStatus.OK,
    },
};
