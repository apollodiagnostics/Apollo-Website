import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const DownloadReportResponseName = {
    TOKEN_CREATED: 'TOKEN_CREATED',
    SEND_OTP: 'SEND_OTP',
    VERIFY_OTP: 'VERIFY_OTP',
    DOWNLOAD_REPORT: 'REPORT_DOWNLOADED',
};

export const DownloadReportResponseInfo: Record<
    string,
    IResponseStatusMessage
> = {
    TOKEN_CREATED: {
        message: 'Token created successfully',
        statusCode: HttpStatus.CREATED,
    },

    OTP_SEND: {
        message: 'Otp send successfully',
        statusCode: HttpStatus.OK,
    },

    VERIFY_OTP: {
        message: 'Verify otp successfully',
        statusCode: HttpStatus.OK,
    },

    DOWNLOAD_REPORT: {
        message: 'Download report successfully',
        statusCode: HttpStatus.OK,
    },
};
