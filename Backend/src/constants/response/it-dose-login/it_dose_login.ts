import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const loginResponseName = {
    LOGIN: 'LOGIN',
};

export const loginResponseInfo: Record<string, IResponseStatusMessage> = {
    LOGIN: {
        message: 'Logged  successfully',
        statusCode: HttpStatus.OK,
    },
};
