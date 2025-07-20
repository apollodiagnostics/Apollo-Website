import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { DownloadReportService } from '../service/download_report.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { SendOtpBodyDto } from '../dto/send_otp.dto';
import { VerifyOtpBodyDto } from '../dto/verify_otp.dto';
import { DownloadReportBodyDto } from '../dto/download_report.dto';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';

@Controller()
export class DownloadReportController {
    constructor(private downloadReportService: DownloadReportService) {}

    @Post('send-otp')
    @UseInterceptors(FileInterceptor('file'))
    @ResponseCustom(responseName.SEND_OTP)
    async sendOtp(@Body() body: SendOtpBodyDto) {
        return await this.downloadReportService.sendOtp(body);
    }

    @Post('verify-otp')
    @UseInterceptors(FileInterceptor('file'))
    @ResponseCustom(responseName.VERIFY_OTP)
    async verifyOtp(@Body() body: VerifyOtpBodyDto) {
        return await this.downloadReportService.verifyOtp(body);
    }

    @Post('download-report')
    @UseInterceptors(FileInterceptor('file'))
    @ResponseCustom(responseName.DOWNLOAD_REPORT)
    async downloadReport(@Body() body: DownloadReportBodyDto) {
        return await this.downloadReportService.downloadReport(body);
    }
}
