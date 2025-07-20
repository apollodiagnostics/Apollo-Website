import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { MASTER_ERROR } from '../errors/master';

export const MASTER_ERROR_CONFIG: ErrorConfig<MASTER_ERROR> = {
    [MASTER_ERROR.GALLERY_DETAILS_NOT_FOUND]: {
        message: 'Gallery details not found ',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'GALLERY_DETAILS_NOT_FOUND_ERROR',
    },
    [MASTER_ERROR.GOOGLE_RATING_NOT_FOUND]: {
        message: 'Ratings not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'GOOGLE_RATING_NOT_FOUND_ERROR',
    },
    [MASTER_ERROR.NEWS_MEDIA_NOT_FOUND]: {
        message: 'News and media not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'NEWS_MEDIA_NOT_FOUND_ERROR',
    },
    [MASTER_ERROR.ARTICLE_NOT_FOUND]: {
        message: 'Articles not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'ARTICLE_NOT_FOUND_ERROR',
    },
    [MASTER_ERROR.HEALTH_DETAILS_NOT_FOUND]: {
        message: 'Health details not found ',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'HEALTH_DETAILS_NOT_FOUND_ERROR',
    },
    [MASTER_ERROR.LOCATION_NOT_FOUND]: {
        message: 'Location not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'LOCATION_NOT_FOUND_ERROR',
    },
    [MASTER_ERROR.CATEGORY_NOT_FOUND]: {
        message: 'Category not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'CATEGORY_NOT_FOUND_ERROR',
    },
};
