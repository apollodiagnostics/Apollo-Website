import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import * as FormData from 'form-data';
import { ITDOSE_DIAGNOSTICS_ROUTE } from '../constant/itdose_diagnostics.constants';
import { IItDoseDiagnosticsConfig } from '../interface/itdose_diagnostics.interface';

@Injectable()
export class ITDoseDiagnosticeService {
    private axiosClient: AxiosInstance;
    private authToken: string | null = null;
    private authTokenExpireAt: number | null = null;
    private isRefreshingToken: boolean = false;
    private itDosDiagnosticConfig: IItDoseDiagnosticsConfig;
    private pendingRequests: Array<(token: string) => void> = [];
    private unAuthorizedRoute = [
        '/ApolloWebsiteApi/api/LoginAPI',
        '/HomeCollectionDynamicRoaster/API/HomeAPIDynamic/GetChargeDetail',
    ];

    constructor(
        private configService: ConfigService,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    ) {
        this.itDosDiagnosticConfig = this.configService.get(
            'microService.limsApolloDiagnostics',
        );

        this.logger.info(
            'Printing itdose dynamic roster service gateway :',
            this.itDosDiagnosticConfig,
        );
        this.axiosClient = axios.create({
            baseURL: `${this.itDosDiagnosticConfig.url}`,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        this.authInterceptor();
    }

    private authInterceptor() {
        this.axiosClient.interceptors.request.use(
            async (config) => {
                if (this.unAuthorizedRoute.includes(config.url!)) {
                    return config;
                }

                if (!this.authToken || this.isTokenExpired()) {
                    await this.refreshAuthToken();
                }

                config.headers.Authorization = `Bearer ${this.authToken}`;
                return config;
            },
            (error) => {
                return Promise.reject(error);
            },
        );
    }

    private isTokenExpired(): boolean {
        if (!this.authTokenExpireAt) return false;

        return Date.now() >= this.authTokenExpireAt;
    }

    private async refreshAuthToken() {
        if (this.isRefreshingToken) {
            return new Promise((resolve) => {
                this.pendingRequests.push(resolve);
            });
        }

        this.isRefreshingToken = true;

        try {
            this.authToken = await this.getAuthToken();
            const oneHoutInMillis = 60 * 60 * 1000;
            this.authTokenExpireAt = Date.now() + oneHoutInMillis;

            this.pendingRequests.forEach((callback) =>
                callback(this.authToken!),
            );
            this.pendingRequests = [];
        } catch (error) {
            this.logger.error('Error refreshing token:', error);
            throw new HttpException(
                'Token refresh failed',
                HttpStatus.UNAUTHORIZED,
            );
        } finally {
            this.isRefreshingToken = false;
        }
    }

    public async getAuthToken(): Promise<string> {
        try {
            const { url, username, password, client } =
                this.itDosDiagnosticConfig;
            const loginUrl = `${url}${ITDOSE_DIAGNOSTICS_ROUTE.login}`;

            this.logger.info(
                'Printing lims apollo diagonistics Token credentials :',
                {
                    loginUrl,
                    username,
                    password,
                    client,
                },
            );

            const formData = new FormData();
            formData.append('Username', username);
            formData.append('Password', password);
            formData.append('Client', client);

            const response = await axios.post(loginUrl, formData);
            const result = response.data.data;

            if (!result || !result[0]?.Token) {
                throw new HttpException(
                    'Failed to retrieve token',
                    HttpStatus.UNAUTHORIZED,
                );
            }

            return result[0].Token;
        } catch (error: any) {
            throw new HttpException(error.message, error?.response?.status);
        }
    }

    public async sendOtp(mobileNumber: string) {
        try {
            const formData = new FormData();
            formData.append('Mobile', mobileNumber);

            const result = await this.axiosClient.post(
                `${ITDOSE_DIAGNOSTICS_ROUTE.sendOtp}`,
                formData,
                { headers: { ...formData.getHeaders() }, timeout: 120000 },
            );

            return result.data;
        } catch (error: any) {
            this.logger.error('Error in sendOtp:', error.message);
            throw new HttpException(
                error.message,
                error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    public async verifyOtp(mobileNumber: string, otp: string) {
        try {
            const formData = new FormData();
            formData.append('Mobile', mobileNumber);
            formData.append('Otp', otp);

            const result = await this.axiosClient.post(
                `${ITDOSE_DIAGNOSTICS_ROUTE.verifyOtp}`,
                formData,
                { headers: { ...formData.getHeaders() }, timeout: 120000 },
            );

            return result.data;
        } catch (error: any) {
            this.logger.error('Error in verifyOtp:', error.message);
            throw new HttpException(
                error.message,
                error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    public async downloadReport(username: string, password: string) {
        try {
            const formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);

            const result = await this.axiosClient.post(
                `${ITDOSE_DIAGNOSTICS_ROUTE.downloadReport}`,
                formData,
                { headers: { ...formData.getHeaders() }, timeout: 120000 },
            );

            return result.data;
        } catch (error: any) {
            this.logger.error('Error in downloadReport:', error.message);
            throw new HttpException(
                error.message,
                error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
