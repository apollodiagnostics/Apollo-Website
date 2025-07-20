import { Injectable, BadRequestException, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { IHcCreditConfig } from '../interface/hc_credit.interface';
import { HCCREDIT_ROUTE } from '../constant/hc_credit.constant';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class HcCreditServiceGateway {
    private axiosClient: AxiosInstance;
    private hcCreditConfig: IHcCreditConfig;

    constructor(
        private configService: ConfigService,
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
    ) {
        this.hcCreditConfig = this.configService.get(
            'microService.apolloProxyGate',
        );

        this.logger.info(
            'Printing Hc credit service gateway:',
            this.hcCreditConfig,
        );

        this.axiosClient = axios.create({
            baseURL: `${this.hcCreditConfig.url}`,
            headers: {
                APIKey: this.hcCreditConfig.apiKey,
                AccessToken: this.hcCreditConfig.accessToken,
                'Content-Type': this.hcCreditConfig.contentType,
                'x-apollo247-apigee-api-key': this.hcCreditConfig.apigeeApiKey,
            },
        });
    }

    public async getHcCredit(mobileNumber: string) {
        try {
            const url = `${this.hcCreditConfig.url}${HCCREDIT_ROUTE.getHcCredit}?mobilenumber=${mobileNumber}`;
            this.logger.info('Printing get hc credit url:', url);
            const response = await this.axiosClient.get(url, {
                timeout: 120000,
            });
            return response.data;
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    public async sendOtp(
        businessUnit: string,
        storeCode: string,
        mobileNumber: string,
        creditsRedeemed: number,
        orderId: string,
    ) {
        try {
            const url = `${this.hcCreditConfig.url}${HCCREDIT_ROUTE.sendOtp}`;
            this.logger.info('Printing Hc credit send otp url:', url);
            const body = {
                BusinessUnit: businessUnit,
                StoreCode: storeCode,
                MobileNumber: mobileNumber,
                CreditsRedeemed: creditsRedeemed,
                OrderId: orderId,
            };
            const response = await this.axiosClient.post(url, body, {
                timeout: 120000,
            });
            return response.data;
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    public async validateOtp(
        requestNumber: string,
        businessUnit: string,
        storeCode: string,
        mobileNumber: string,
        otp: string,
    ) {
        try {
            const url = `${this.hcCreditConfig.url}${HCCREDIT_ROUTE.validateOtp}`;
            this.logger.info('Printing Hc credit validate otp url:', url);
            const body = {
                RequestNumber: requestNumber,
                BusinessUnit: businessUnit,
                StoreCode: storeCode,
                MobileNumber: mobileNumber,
                OTP: otp,
            };
            const response = await this.axiosClient.post(url, body, {
                timeout: 120000,
            });
            return response.data;
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }
}
