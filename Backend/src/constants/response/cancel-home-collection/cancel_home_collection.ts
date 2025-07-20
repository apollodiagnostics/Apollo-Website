import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const cancelHomeCollectionResponseName = {
    CANCELLED_HOME_COLLECTION: 'CANCELLED_HOME_COLLECTION',
};

export const cancelHomeCollectionResponseInfo: Record<
    string,
    IResponseStatusMessage
> = {
    CANCELLED_HOME_COLLECTION: {
        message: 'Cancelled home collection successfully',
        statusCode: HttpStatus.OK,
    },
};
