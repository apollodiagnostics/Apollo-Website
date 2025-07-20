import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const fileUploadResponseName = {
    IMAGES_UPLOADED: 'IMAGES_UPLOADED',
    VIDEOS_UPLOADED: 'VIDEOS_UPLOADED',
    FILES_UPLOADED: 'FILES_UPLOADED',
    IMAGE_UPLOADED: 'IMAGE_UPLOADED',
    VIDEO_UPLOADED: 'VIDEO_UPLOADED',
    GET_ALL_CONDITIONS: 'GET_ALL_CONDITIONS',
    GET_ALL_CATEGORY: 'GET_ALL_CATEGORY',
    GET_AVAILABLE_SLOTS: 'GET_AVAILABLE_SLOTS',
    CHECK_SERVICEABILITY: 'CHECK_SERVICEABILITY',
};

export const fileUploadResponseInfo: Record<string, IResponseStatusMessage> = {
    IMAGES_UPLOADED: {
        message: 'Images Uploaded Successfully',
        statusCode: HttpStatus.OK,
    },
    VIDEOS_UPLOADED: {
        message: 'Videos Uploaded Successfully',
        statusCode: HttpStatus.OK,
    },
    FILES_UPLOADED: {
        message: 'Files Uploaded Successfully',
        statusCode: HttpStatus.OK,
    },
    IMAGE_UPLOADED: {
        message: 'Image Uploaded Successfully',
        statusCode: HttpStatus.OK,
    },
    VIDEO_UPLOADED: {
        message: 'Video Uploaded Successfully',
        statusCode: HttpStatus.OK,
    },
    GET_AVAILABLE_SLOTS: {
        message: 'Available slots fetched successfully',
        statusCode: HttpStatus.OK,
    },
    CHECK_SERVICEABILITY: {
        message:
            'Serviceability check successful. The requested location is serviceable.',
        statusCode: HttpStatus.OK,
    },
};
