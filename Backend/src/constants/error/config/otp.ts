import { ErrorConfig } from '../error.types';
import { OTP_ERROR } from '../errors/otp';
import { HttpStatus } from '@nestjs/common';

export const OTP_ERROR_CONFIG: ErrorConfig<OTP_ERROR> = {
    [OTP_ERROR.INVALID_NUMBER]: {
        message: 'Invalid number ',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: 'INVALID_NUMBER_ERROR',
    },
    [OTP_ERROR.INVALID_OTP]: {
        message: 'Invalid otp or mobile number ',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: 'INVALID_INPUT_DATA_ERROR',
    },
    [OTP_ERROR.TIME_EXPIRE]: {
        message: 'Time expired ',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: 'TIME_EXPIRE_ERROR',
    },

    [OTP_ERROR.OTP_ERROR]: {
        message: 'Failed in otp send ',
        statusCode: HttpStatus.FAILED_DEPENDENCY,
        errorCode: 'OTP_NOT_SEND_ERROR',
    },
};
