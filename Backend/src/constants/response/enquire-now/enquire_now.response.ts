import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const enquireResponseName = {
    USER_CREATED: 'USER_CREATED',
};

export const enquireResponseInfo: Record<string, IResponseStatusMessage> = {
    USER_CREATED: {
        message: 'Enquire successfully',
        statusCode: HttpStatus.CREATED,
    },
};
