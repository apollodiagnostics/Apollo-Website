import { BadRequestException, Injectable } from '@nestjs/common';
import { SendOtpBodyDto } from '../dto/send_otp.dto';
import { VerifyOtpBodyDto } from '../dto/verify_otp.dto';
import { DownloadReportBodyDto } from '../dto/download_report.dto';
import { ConfigService } from '@nestjs/config';
import { ITDoseDiagnosticeService } from 'src/service-gateway/service/itdose_diagnostic.service';

@Injectable()
export class DownloadReportService {
    constructor(
        private readonly configService: ConfigService,
        private readonly hcApolloDiagnosticsGatewayService: ITDoseDiagnosticeService,
    ) {}

    async getToken() {
        try {
            const result =
                await this.hcApolloDiagnosticsGatewayService.getAuthToken();
            if (!result) {
                throw new BadRequestException('Please enter valid credentials');
            }
            return result;
        } catch (err: any) {
            throw new BadRequestException(err.message);
        }
    }

    async sendOtp(body: SendOtpBodyDto) {
        try {
            const result = await this.hcApolloDiagnosticsGatewayService.sendOtp(
                body.mobileNumber,
            );
            if (!result || result.status === false) {
                throw new BadRequestException(
                    result.message || 'Error sending OTP',
                );
            }
            return result;
        } catch (err: any) {
            throw new BadRequestException(err.message);
        }
    }

    async verifyOtp(body: VerifyOtpBodyDto) {
        try {
            const result =
                await this.hcApolloDiagnosticsGatewayService.verifyOtp(
                    body.mobileNumber,
                    body.otp,
                );
            if (!result || result.status === false) {
                throw new BadRequestException(
                    result.message || 'Error verifying OTP',
                );
            }
            return { url: result.message };
        } catch (err: any) {
            throw new BadRequestException(err.message);
        }
    }

    async downloadReport(body: DownloadReportBodyDto) {
        try {
            const result =
                await this.hcApolloDiagnosticsGatewayService.downloadReport(
                    body.userName,
                    body.password,
                );
            if (!result || result.status === false) {
                throw new BadRequestException(
                    result.message || 'Error downloading report',
                );
            }
            return result;
        } catch (err: any) {
            throw new BadRequestException(err.message);
        }
    }
}
