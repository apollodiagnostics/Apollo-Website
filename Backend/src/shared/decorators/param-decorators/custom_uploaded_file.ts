import { createParamDecorator } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import imageSize from 'image-size';
import { FILE_UPLOAD_ERROR } from 'src/constants/error';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';

export enum FILE_TYPE {
    JPEG = 'image/jpeg',
    PNG = 'image/png',
    WEBP = 'image/webp',
    JPG = 'image/jpg',
    SVG = '.svg',
    IMAGE = 'image/*',
    PDF = 'application/pdf',
    WORD = 'application/msword',
    DOX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    DOC = '.doc',
    docx = '.docx',
    MP4 = 'video/mp4',
    WEBM = 'video/webm',
    AVI = 'video/x-msvideo',
    MKV = 'video/x-matroska',
    MOV = 'video/quicktime',
    WMV = 'video/x-ms-wmv',
    FLV = 'video/x-flv',
    VIDEO = 'video/*',
    APPLE_VIDEO = 'application/octet-stream',
    // Add more allowed file types as needed
}

type Config = {
    maxSize?: number;
    allowedTypes?: string[];
    isMultiple?: boolean;
};

export const CustomUploadedFile = createParamDecorator(
    (config: Config, req: ExecutionContextHost) => {
        const { allowedTypes, maxSize, isMultiple } = {
            isMultiple: false,
            maxSize: 1024 * 1024 * 10,
            allowedTypes: Object.values(FILE_TYPE),
            ...(config ?? {}),
        };

        const args =
            req.getArgs<
                [{ file: Express.Multer.File; files: Express.Multer.File[] }]
            >()[0];

        const files = args.files;
        const file = args.file ?? files?.[0];

        if (!file) {
            throw new HttpExceptionWrapper(FILE_UPLOAD_ERROR.MISSING_FILE);
        }

        const hasExceedLimit = isMultiple
            ? files.reduce((value, curr) => {
                  if (curr.size >= maxSize) {
                      //   throw new HttpExceptionWrapper(ERROR.INVALID_FILE_SIZE);
                  }
                  return value + curr.size;
              }, 0) >=
              files.length * maxSize
            : file.size >= maxSize;
        const isInvalidType = !allowedTypes.includes(file.mimetype);

        // Perform custom validation here
        if (hasExceedLimit) {
            // throw new HttpExceptionWrapper(ERROR.INVALID_FILE_SIZE);
        }

        if (isInvalidType) {
            throw new HttpExceptionWrapper(FILE_UPLOAD_ERROR.INVALID_FILE_TYPE);
        }

        const isValidHeightWidth = isValidSize(
            isMultiple,
            isMultiple ? files : [file],
        );

        if (!isValidHeightWidth)
            throw new HttpExceptionWrapper(
                FILE_UPLOAD_ERROR.INVALID_FILE_HEIGHT_WIDTH,
            );

        return isMultiple ? files : file;
    },
);

const isValidSize = (
    isMultiple: boolean,
    files: Express.Multer.File[],
): boolean => {
    if (isMultiple) {
        for (const file of files) {
            if (file.mimetype.split('/').includes('image')) {
                const dimensions = imageSize(file.buffer);
                const { width, height } = dimensions;
                if (width < 300 || height < 300) {
                    return false;
                }
            }
        }
        return true; // All image files meet the size requirement
    } else if (files[0]?.mimetype?.split('/')?.includes('image')) {
        const dimensions = imageSize(files[0]?.buffer);
        const { width, height } = dimensions;
        return width >= 300 && height >= 300;
    } else {
        return true;
    }
};
