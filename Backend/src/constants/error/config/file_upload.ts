import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { FILE_UPLOAD_ERROR } from '../errors/file_upload';

export const FILE_UPLOAD_ERROR_CONFIG: ErrorConfig<FILE_UPLOAD_ERROR> = {
    [FILE_UPLOAD_ERROR.MISSING_FILE]: {
        message: 'File missing',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: 'MISSING_FILE_ERROR',
    },

    [FILE_UPLOAD_ERROR.DELETE_IMAGE]: {
        message: 'Image could not be deleted',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: `${FILE_UPLOAD_ERROR.DELETE_IMAGE}`,
    },
    [FILE_UPLOAD_ERROR.GENERATE_URL]: {
        message: 'Image url could not be generated',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: `${FILE_UPLOAD_ERROR.GENERATE_URL}`,
    },
    [FILE_UPLOAD_ERROR.IMAGE_NOT_UPLOADED]: {
        message: 'Image could not be uploaded',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: `${FILE_UPLOAD_ERROR.IMAGE_NOT_UPLOADED}`,
    },
    [FILE_UPLOAD_ERROR.NOT_AN_IMAGE]: {
        message: 'File must be an image',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: `${FILE_UPLOAD_ERROR.NOT_AN_IMAGE}`,
    },
    [FILE_UPLOAD_ERROR.NO_FILE_AVAILABLE]: {
        message: 'No file Available with the given key',

        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: `${FILE_UPLOAD_ERROR.NO_FILE_AVAILABLE}`,
    },
    [FILE_UPLOAD_ERROR.NOT_VALID]: {
        message: 'Document is not a valid',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: `${FILE_UPLOAD_ERROR.NOT_VALID}`,
    },

    [FILE_UPLOAD_ERROR.INVALID_FILE_SIZE]: {
        message: 'Invalid file size',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: `${FILE_UPLOAD_ERROR.INVALID_FILE_SIZE}`,
    },
    [FILE_UPLOAD_ERROR.INVALID_FILE_TYPE]: {
        message: 'Invalid file Type',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: `${FILE_UPLOAD_ERROR.INVALID_FILE_TYPE}`,
    },

    [FILE_UPLOAD_ERROR.INVALID_FILE_HEIGHT_WIDTH]: {
        message: 'Image Height and width must be greater than 300 pixels',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: `${FILE_UPLOAD_ERROR.INVALID_FILE_HEIGHT_WIDTH}`,
    },
};
