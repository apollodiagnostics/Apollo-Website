import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const homeCollectionResponseName = {
    HOME_COLLECTIONS_FETCHED: 'HOME_COLLECTION_FETCHED',
    HOME_COLLECTION_CREATED: 'HOME_COLLECTION_CREATED',
};

export const homeCollectionResponseInfo: Record<
    string,
    IResponseStatusMessage
> = {
    HOME_COLLECTIONS_FETCHED: {
        message: 'Home collections fetched successfully',
        statusCode: HttpStatus.OK,
    },

    HOME_COLLECTION_CREATED: {
        message: 'Home collection created successfully',
        statusCode: HttpStatus.CREATED,
    },
};
