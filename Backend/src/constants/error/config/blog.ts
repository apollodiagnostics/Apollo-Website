import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { BLOG_ERROR } from '../errors/blog';

export const BLOG_ERROR_CONFIG: ErrorConfig<BLOG_ERROR> = {
    [BLOG_ERROR.DATA_NOT_FOUND]: {
        message: 'Blog not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'BLOG_NOT_FOUND_ERROR',
    },
};
