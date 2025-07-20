import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const topItemResponseName = {
    TOP_ITEM_FETCHED: 'TOP_ITEM_FETCHED',
};

export const topItemResponseInfo: Record<string, IResponseStatusMessage> = {
    TOP_ITEM_FETCHED: {
        message: ' Top items fetched successfully',
        statusCode: HttpStatus.OK,
    },
};
