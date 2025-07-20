import { Module } from '@nestjs/common';
import { DownloadReportController } from './controller/download_report.controller';
import { DownloadReportService } from './service/download_report.service';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';

@Module({
    imports: [ServiceGatewayModule],
    controllers: [DownloadReportController],
    providers: [DownloadReportService],
    exports: [],
})
export class DownloadReportModule {}
