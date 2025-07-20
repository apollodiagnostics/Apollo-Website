import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const blogResponseName = {
    BLOGS_FETCHED: 'BLOGS_FETCHED',
    ALL_BLOGS_FETCHED: 'ALL_BLOGS_FETCHED',
};

export const blogsResponseInfo: Record<string, IResponseStatusMessage> = {
    BLOGS_FETCHED: {
        message: 'Blogs fetched successfully',
        statusCode: HttpStatus.OK,
    },

    ALL_BLOGS_FETCHED: {
        message: 'All blogs fetched successfully',
        statusCode: HttpStatus.OK,
    },
};
