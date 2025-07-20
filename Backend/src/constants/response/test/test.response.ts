import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const testResponseName = {
    GET_TEST_BY_ID: 'GET_TEST_BY_ID',
    GET_TEST_BY_NAME: 'GET_TEST_BY_NAME',
    GET_ALL_TESTS: 'GET_ALL_TESTS',
};

export const testResponseInfo: Record<string, IResponseStatusMessage> = {
    GET_TEST: {
        message: 'Fetch test successfully by id',
        statusCode: HttpStatus.OK,
    },
    GET_TEST_BY_NAME: {
        message: 'Fetch test successfully by name',
        statusCode: HttpStatus.OK,
    },

    GET_ALL_TESTS: {
        message: 'Fetch all tests successfully',
        statusCode: HttpStatus.OK,
    },
};
