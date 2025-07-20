import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FileUploadController } from './controller/file_upload.controller';
import { FileUploadService } from './service/file_upload.service';
import { S3Service } from './service/s3_service.service';

import { SharedModule } from 'src/shared/shared.module';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';

@Module({
    imports: [ServiceGatewayModule, ConfigModule, SharedModule],
    controllers: [FileUploadController],
    providers: [FileUploadService, S3Service, ConfigService],
    exports: [],
})
export class FileUploadModule {}
