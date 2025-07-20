import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { FILE_UPLOAD_ERROR } from 'src/constants/error';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { Logger } from 'winston';
import { GetFilesResponse } from '../interface/form.data.interface';
import { S3Service } from './s3_service.service';

@Injectable()
export class FileUploadService {
    constructor(
        private s3Service: S3Service,
        private configService: ConfigService,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    ) {}

    async fileUpload(file: Express.Multer.File, defaultKey?: string) {
        this.logger.info('File upload Service ::  fileUpload :: ', {
            [`${file.filename ?? 'file'}_Size`]: file.size,
        });
        const key =
            defaultKey ??
            `${this.configService.get('s3.keyPrefix')}${Date.now()}`;

        await this.s3Service.uploadPrivateFile(file, key);

        return await this.getFile(key);
    }

    async getFile(
        key: string,
        throwErrorIfImageNotAvailable = true,
    ): Promise<string | null> {
        this.logger.info('File upload Service ::  getFile :: ', {
            key,
        });
        return this.generatePermanentUrl(key);

        return await this.s3Service.generateSignedUrl(
            key,
            throwErrorIfImageNotAvailable,
        );
    }

    async getFiles(keys: string[]): Promise<GetFilesResponse> {
        const fileInfo = await Promise.all(
            keys.map(async (key) => {
                return await this.getFile(key, false).then((res) => ({
                    key: key,
                    fileUrl: res,
                }));
            }),
        );

        const fileNotFound: string[] = [];

        const filesData = fileInfo.reduce(
            (val, curr) => {
                if (curr.fileUrl) val.files.push(curr);
                else fileNotFound.push(curr.key);
                return val;
            },
            { files: [] },
        );

        if (fileNotFound.length) {
            throw new HttpExceptionWrapper(
                FILE_UPLOAD_ERROR.NO_FILE_AVAILABLE,
                {
                    data: {
                        ...filesData,
                        fileNotFound,
                    },
                },
            );
        }

        return filesData;
    }

    async deleteFile(key: string) {
        this.logger.info('File upload Service ::  deleteFile :: ', { key });
        return await this.s3Service.deleteFile(key);
    }

    generatePermanentUrl(objectKey: string): string {
        return `${this.configService.get('s3.accessUrlPrefix')}/${objectKey}`;
        const permanentUrl = `https://${this.configService.get<string>(
            's3.credentials.s3Bucket',
        )}.s3.amazonaws.com/${objectKey}`;
        return permanentUrl;
    }
}
