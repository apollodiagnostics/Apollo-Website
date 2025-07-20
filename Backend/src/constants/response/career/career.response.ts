import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const careerResponseName = {
    RECORD_FETCHED: 'RECORD_FETCHED',
};

export const careerResponseInfo: Record<string, IResponseStatusMessage> = {
    RECORD_FETCHED: {
        message: 'Record fetched successfully',
        statusCode: HttpStatus.OK,
    },
};
