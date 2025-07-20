import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const paymentResponseName = {
    INITIATE: 'INITIATE',
};

export const paymentResponseInfo: Record<string, IResponseStatusMessage> = {
    INITIATE: {
        message: 'Payment initiated successfully',
        statusCode: HttpStatus.OK,
    },
};
