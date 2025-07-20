import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const userLoginResponseName = {
    USER_LOGIN: 'USER_LOGIN',
    OTP_SEND: 'OTP_SEND',
    OTP_VALIDATE: 'OTP_VALIDATE',
};

export const userLoginResponseInfo: Record<string, IResponseStatusMessage> = {
    USER_LOGIN: {
        message: ' User login successfully',
        statusCode: HttpStatus.OK,
    },
    OTP_SEND: {
        message: 'Otp send successfully',
        statusCode: HttpStatus.OK,
    },

    OTP_VALIDATE: {
        message: 'Otp verified successfully',
        statusCode: HttpStatus.OK,
    },
};
