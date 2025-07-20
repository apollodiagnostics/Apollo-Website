import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const hcCreditResponseName = {
    RECORD_FETCHED: 'RECORD_FETCHED',
};

export const hcCreditResponseInfo: Record<string, IResponseStatusMessage> = {
    RECORD_FETCHED: {
        message: 'Record fetched successfully',
        statusCode: HttpStatus.OK,
    },
};
