import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const bannerResponseName = {
    BANNER_FETCHED: 'BANNER_FETCHED',
    ALL_BANNER_FETCHED: 'ALL_BANNER_FETCHED',
};

export const bannerResponseInfo: Record<string, IResponseStatusMessage> = {
    BANNER_FETCHED: {
        message: 'Banner fetched successfully',
        statusCode: HttpStatus.OK,
    },

    ALL_BANNER_FETCHED: {
        message: 'All banners fetched successfully',
        statusCode: HttpStatus.OK,
    },
};
