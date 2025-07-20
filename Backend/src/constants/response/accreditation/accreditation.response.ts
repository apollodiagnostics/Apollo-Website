import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const accreditationResponseName = {
    RECORD_FETCHED: 'RECORD_FETCHED',
};

export const accreditationResponseInfo: Record<string, IResponseStatusMessage> =
    {
        RECORD_FETCHED: {
            message: 'Record fetched successfully',
            statusCode: HttpStatus.OK,
        },
    };
