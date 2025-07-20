import {
    Controller,
    Get,
    Inject,
    Param,
    Post,
    Put,
    UseInterceptors,
} from '@nestjs/common';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import {
    CustomUploadedFile,
    FILE_TYPE,
} from 'src/shared/decorators/param-decorators/custom_uploaded_file';
import { Logger } from 'winston';
import { FileUploadService } from '../service/file_upload.service';
import { responseName } from 'src/constants/response';

/**
 * @todo get image will only callable thru internal service not from FE (cors)
 */

@Controller()
export class FileUploadController {
    constructor(
        private fileUploadService: FileUploadService,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    ) {}

    @Get()
    sendResponse() {
        return 'File Upload Service running successfully ...';
    }

    @Post('images')
    @UseInterceptors(FilesInterceptor('images', 25))
    @ResponseCustom(responseName.IMAGES_UPLOADED)
    async uploadMultipleImages(
        @CustomUploadedFile({ isMultiple: true })
        images: Array<Express.Multer.File>,
    ) {
        this.logger.info(
            'File upload Controller ::  uploadMultipleImages :: ',
            images.map((item, idx) => ({ [`file_${idx}`]: item.size })),
        );

        const uploadedImages = await Promise.all(
            images.map(async (image) => {
                return {
                    fileUrl: await this.fileUploadService.fileUpload(image),
                    type: 'Image',
                };
            }),
        );

        return { uploadedImages };
    }

    @Post('videos')
    @UseInterceptors(FilesInterceptor('videos', 25))
    @ResponseCustom(responseName.VIDEOS_UPLOADED)
    async uploadMultipleVideos(
        @CustomUploadedFile({ isMultiple: true })
        videos: Array<Express.Multer.File>,
    ) {
        this.logger.info(
            'File upload Controller ::  uploadMultipleVideos :: ',
            videos.map((item, idx) => ({ [`file_${idx}`]: item.size })),
        );

        const uploadedVideos = await Promise.all(
            videos.map(async (video) => {
                return {
                    fileUrl: await this.fileUploadService.fileUpload(video),
                    type: 'Video',
                };
            }),
        );

        return { uploadedVideos };
    }

    @Post('files')
    @UseInterceptors(FilesInterceptor('files', 25))
    @ResponseCustom(responseName.FILES_UPLOADED)
    async uploadMultipleFiles(
        @CustomUploadedFile({ isMultiple: true })
        files: Array<Express.Multer.File>,
    ) {
        this.logger.info(
            'File upload Controller ::  uploadMultipleFiles :: ',
            files.map((item, idx) => ({ [`file_${idx}`]: item.size })),
        );

        const uploadedFiles = await Promise.all(
            files.map(async (file) => {
                return {
                    fileUrl: await this.fileUploadService.fileUpload(file),
                    type:
                        file.mimetype.split('/').includes('video') ||
                        file.mimetype.split('/').includes('application')
                            ? 'Video'
                            : 'Image',
                };
            }),
        );

        return { uploadedFiles };
    }

    @Post('image')
    @UseInterceptors(FileInterceptor('image'))
    @ResponseCustom(responseName.IMAGE_UPLOADED)
    async uploadSingleImage(
        @CustomUploadedFile({
            allowedTypes: [FILE_TYPE.PNG, FILE_TYPE.JPEG, FILE_TYPE.JPG],
            maxSize: 4 * 1024 * 1024,
        })
        image: Express.Multer.File,
    ) {
        this.logger.info('File upload Controller ::  uploadSingleImage :: ', {
            size: image.size,
        });

        return {
            fileUrl: await this.fileUploadService.fileUpload(image),
            type: 'Image',
        };
    }

    @Post('video')
    @UseInterceptors(FileInterceptor('video'))
    @ResponseCustom(responseName.VIDEO_UPLOADED)
    async uploadSingleVideo(
        @CustomUploadedFile()
        video: Express.Multer.File,
    ) {
        this.logger.info('File upload Controller ::  uploadSingleVideo :: ', {
            size: video.size,
        });

        return {
            fileUrl: await this.fileUploadService.fileUpload(video),
            type: 'Video',
        };
    }

    @Post('file')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@CustomUploadedFile() file: Express.Multer.File) {
        const uploadedFile = await this.fileUploadService.fileUpload(file);
        return { uploadedFile };
    }

    @Put('file/:key')
    @UseInterceptors(FileInterceptor('file'))
    async updateFile(
        @CustomUploadedFile()
        file: Express.Multer.File,
        @Param('key') key: string,
    ) {
        this.logger.info('File upload Controller ::  updateFile :: ', {
            key: key,
        });

        const uploadedFile = await this.fileUploadService.fileUpload(file, key);

        return { uploadedFile };
    }
}
