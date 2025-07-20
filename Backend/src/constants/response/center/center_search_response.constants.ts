import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const centerResponseName = {
    CENTER_FETCHED: 'CENTER_FETCHED',
    ALL_CENTER_FETCHED: 'ALL_CENTER_FETCHED',
};

export const centerResponseInfo: Record<string, IResponseStatusMessage> = {
    CENTER_FETCHED: {
        message: 'Center fetched successfully',
        statusCode: HttpStatus.OK,
    },

    ALL_CENTER_FETCHED: {
        message: 'All centers fetched successfully',
        statusCode: HttpStatus.OK,
    },
};
