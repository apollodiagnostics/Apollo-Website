import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { FILE_UPLOAD_ERROR } from 'src/constants/error';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { Logger } from 'winston';

@Injectable()
export class S3Service {
    private s3: S3;
    private bucket: string;

    constructor(
        private configService: ConfigService,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    ) {
        this.bucket = configService.get<string>('s3.credentials.s3Bucket');
        this.s3 = new S3({
            accessKeyId: configService.get<string>(
                's3.credentials.accessKeyId',
            ),
            secretAccessKey: configService.get<string>(
                's3.credentials.secretAccessKey',
            ),
            region: configService.get<string>('s3.credentials.s3Region'),
        });
    }

    async uploadPrivateFile(
        file: Express.Multer.File,
        key: string,
    ): Promise<string> {
        try {
            this.logger.info('S3 Service ::  uploadPrivateFile :: ');

            await this.s3
                .upload({
                    Bucket: this.bucket,
                    Key: key,
                    Body: file.buffer,
                    ACL: 'private',
                    ContentType: file.mimetype,
                })
                .promise();

            return;
        } catch (error) {
            throw new HttpExceptionWrapper(
                FILE_UPLOAD_ERROR.IMAGE_NOT_UPLOADED,
                error,
            );
        }
    }

    async uploadPublicFile(
        file: Express.Multer.File,
        key: string,
    ): Promise<string> {
        try {
            this.logger.info('S3 Service ::  uploadPublicFile :: ');

            await this.s3
                .upload({
                    Bucket: this.bucket,
                    Key: key,
                    Body: file.buffer,
                    ACL: 'public-read',
                    ContentType: file.mimetype,
                })
                .promise();

            return;
        } catch (error) {
            throw new HttpExceptionWrapper(
                FILE_UPLOAD_ERROR.IMAGE_NOT_UPLOADED,
                error,
            );
        }
    }

    async generateSignedUrl(
        key: string,
        throwErrorIfImageNotAvailable: boolean,
    ) {
        try {
            this.logger.info('S3 Service ::  generateSignedUrl :: ');

            if (!(await this.hasFile(key))) {
                throw new HttpExceptionWrapper(FILE_UPLOAD_ERROR.GENERATE_URL);
            }

            return await this.s3.getSignedUrlPromise('getObject', {
                Bucket: this.bucket,
                Key: key,
                Expires: parseInt(this.configService.get('s3.urlExpiresIn')),
            });
        } catch (error) {
            if (throwErrorIfImageNotAvailable) {
                throw new HttpExceptionWrapper(
                    FILE_UPLOAD_ERROR.NO_FILE_AVAILABLE,
                    error,
                );
            }
            throw new HttpExceptionWrapper(
                FILE_UPLOAD_ERROR.DELETE_IMAGE,
                error,
            );
        }
    }

    async deleteFile(key: string) {
        try {
            this.logger.info('S3 Service ::  deleteFileFromS3 :: ');
            return await this.s3
                .deleteObject({ Bucket: this.bucket, Key: key })
                .promise();
        } catch (error) {
            throw new HttpExceptionWrapper(
                FILE_UPLOAD_ERROR.DELETE_IMAGE,
                error,
            );
        }
    }

    async hasFile(key: string) {
        try {
            this.logger.info('S3 Service ::  hasFile :: ');
            await this.s3
                .headObject({
                    Bucket: this.bucket,
                    Key: key,
                })
                .promise();
            return true;
        } catch (error) {
            if (error.code == 'NotFound') return false;
            throw new HttpExceptionWrapper(FILE_UPLOAD_ERROR.NOT_VALID, error);
        }
    }
}
