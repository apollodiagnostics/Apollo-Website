import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const uhidProfileResponseName = {
    PROFILE_FETCHED: 'PROFILE_FETCHED',
    USER_CREATED: 'USER_CREATED',
    USER_UPDATED: 'USER_UPDATED',
    ADDRESS_CREATED: 'ADDRESS_CREATED',
    ADDRESS_DELETED: 'ADDRESS_DELETED',
    ADDRESS_FETCHED: 'ADDRESS_FETCHED',
    ADDRESS_UPDATED: 'ADDRESS_UPDATED',
    PROFILE_DELETED: 'PROFILE_DELETED',
};

export const uhidProfileResponseInfo: Record<string, IResponseStatusMessage> = {
    PROFILE_FETCHED: {
        message: ' Profiles fetched successfully',
        statusCode: HttpStatus.OK,
    },

    USER_CREATED: {
        message: 'User created successfully',
        statusCode: HttpStatus.CREATED,
    },

    USER_UPDATED: {
        message: 'User updated successfully',
        statusCode: HttpStatus.OK,
    },

    ADDRESS_CREATED: {
        message: 'Address created successfully',
        statusCode: HttpStatus.CREATED,
    },

    ADDRESS_DELETED: {
        message: 'Address deleted successfully',
        statusCode: HttpStatus.OK,
    },

    ADDRESS_UPDATED: {
        message: 'Address updated successfully',
        statusCode: HttpStatus.OK,
    },
    PROFILE_DELETED: {
        message: 'Uhid Profile deleted successfully',
        statusCode: HttpStatus.OK,
    },
};
