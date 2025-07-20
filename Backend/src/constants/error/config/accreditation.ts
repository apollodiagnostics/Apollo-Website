import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { ACCREDITATION_ERROR } from '../errors/accreditation';

export const ACCREDITATION_ERROR_CONFIG: ErrorConfig<ACCREDITATION_ERROR> = {
    [ACCREDITATION_ERROR.DATA_NOT_FOUND]: {
        message: 'Data not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'DATA_NOT_FOUND_ERROR',
    },
};
