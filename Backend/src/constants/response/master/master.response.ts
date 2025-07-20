import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const masterResponseName = {
    GET_ALL_NEWS_MEDIA: 'GET_ALL_NEWS_MEDIA',
    GET_ALL_GOOGLE_RATING: 'GET_ALL_GOOGLE_RATING',
    GET_ALL_GALLERY_DETAILS: 'GET_ALL_GALLERY_DETAILS',
    GET_ALL_ARTICLE: 'GET_ALL_ARTICLE',
    GET_ALL_LOCATIONS: 'GET_ALL_LOCATIONS',
    GET_ALL_CONDITIONS: 'GET_ALL_CONDITIONS',
    GET_ALL_CATEGORY: 'GET_ALL_CATEGORY',
};

export const masterResponseInfo: Record<string, IResponseStatusMessage> = {
    GET_ALL_NEWS_MEDIA: {
        message: 'All news and media fetched sucessfully',
        statusCode: HttpStatus.OK,
    },

    GET_ALL_GOOGLE_RATING: {
        message: 'All google rating fetched sucessfully',
        statusCode: HttpStatus.OK,
    },
    GET_ALL_GALLERY_DETAILS: {
        message: 'All gallery details fetched sucessfully',
        statusCode: HttpStatus.OK,
    },
    GET_ALL_ARTICLE: {
        message: 'All article fetched sucessfully',
        statusCode: HttpStatus.OK,
    },
    GET_ALL_LOCATIONS: {
        message: 'All locations fetched sucessfully',
        statusCode: HttpStatus.OK,
    },

    GET_ALL_CONDITIONS: {
        message: 'All condition fetched sucessfully',
        statusCode: HttpStatus.OK,
    },
    GET_ALL_CATEGORY: {
        message: 'All category fetched sucessfully',
        statusCode: HttpStatus.OK,
    },
};
