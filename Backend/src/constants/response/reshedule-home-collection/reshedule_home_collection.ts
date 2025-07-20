import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const resheduleHomeCollectionResponseName = {
    RESHEDULED: 'RESHEDULED',
};

export const resheduleHomeCollectionResponseInfo: Record<
    string,
    IResponseStatusMessage
> = {
    RESHEDULED: {
        message: 'Resheduled successfully',
        statusCode: HttpStatus.OK,
    },
};
