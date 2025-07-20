import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { UHID_PROFILE_ERROR } from '../errors/uhid_profile';

export const UHID_PROFILE_ERROR_CONFIG: ErrorConfig<UHID_PROFILE_ERROR> = {
    [UHID_PROFILE_ERROR.PROFILE_NOT_FOUND]: {
        message: 'Profile not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'PROFILE_NOT_FOUND_ERROR',
    },

    [UHID_PROFILE_ERROR.USER_NOT_CREAED]: {
        message: 'User not created',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'USER_NOT_CREATED_ERROR',
    },

    [UHID_PROFILE_ERROR.ADDRESS_NOT_FOUND]: {
        message: 'Address not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'ADDRESS_NOT_FOUND_ERROR',
    },
    [UHID_PROFILE_ERROR.ADDRESS_DELETION_FAILED]: {
        message:
            'Unable to delete the address as it is linked to other records.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'ADDRESS_DELETION_FAILED_ERROR',
    },
    [UHID_PROFILE_ERROR.PROFILE_ACCESS_DENIED]: {
        message: 'You do not have permission to access this profile.',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: 'PROFILE_ACCESS_DENIED_ERROR',
    },
    [UHID_PROFILE_ERROR.ADDRESS_DELETE_DENIED]: {
        message: 'You do not have permission to delete this address.',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: 'ADDRESS_DELETE_DENIED_ERROR',
    },
    [UHID_PROFILE_ERROR.ADDRESS_UPDATE_DENIED]: {
        message: 'You do not have permission to update this address.',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: 'ADDRESS_UPDATE_DENIED_ERROR',
    },
};
