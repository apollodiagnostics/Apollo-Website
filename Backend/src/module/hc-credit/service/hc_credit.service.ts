import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { SendOtpBodyDto } from '../dto/send_otp_body.dto';
import { HcCreditServiceGateway } from 'src/service-gateway/service/hc_credit.service';
import { validateOtpBodyDto } from '../dto/validate_otp_body.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class HcCreditService {
    constructor(
        private readonly hcCreditGateway: HcCreditServiceGateway,
        @Inject(WINSTON_MODULE_PROVIDER)
        private readonly logger: Logger,
    ) {}

    async getHcCredit(mobileNumber: string) {
        try {
            return await this.hcCreditGateway.getHcCredit(mobileNumber);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async sendOtp(body: SendOtpBodyDto) {
        try {
            return await this.hcCreditGateway.sendOtp(
                body.businessUnit,
                body.storeCode,
                body.mobileNumber,
                body.creditsRedeemed,
                body.orderId,
            );
        } catch (err) {
            this.logger.info('Printing error in send otp:', { err });
            throw new BadRequestException(err);
        }
    }

    async validateOtp(body: validateOtpBodyDto) {
        try {
            return await this.hcCreditGateway.validateOtp(
                body.requestNumber,
                body.businessUnit,
                body.storeCode,
                body.mobileNumber,
                body.otp,
            );
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }
}
