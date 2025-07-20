import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const prescriptionResponseName = {
    ALL_PRESCRIPTION_FETCHED: 'ALL_PRESCRIPTION_FETCHED',
    PRESCRIPTION_UPLOADED: 'PRESCRIPTION_UPLOADED',
};

export const prescriptionResponseInfo: Record<string, IResponseStatusMessage> =
    {
        ALL_PRESCRIPTION_FETCHED: {
            message: 'All prescription fetched successfully',
            statusCode: HttpStatus.OK,
        },
        PRESCRIPTION_UPLOADED: {
            message: 'Prescription uploaded successfully',
            statusCode: HttpStatus.OK,
        },
    };
