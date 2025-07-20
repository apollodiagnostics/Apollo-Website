import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import * as FormData from 'form-data';
import { IApolloHl } from '../interface/uatlims_apollohl.interface';
import { UAT_LIMS_APOLLO_ROUTES } from '../constant/uatlims_apollohl.constants';

@Injectable()
export class UatLimsApolloHlServiceGateway {
    private axiosClient: AxiosInstance;
    private authToken: string | null = null;
    private authTokenExpireAt: number | null = null;
    private isRefreshingToken: boolean = false;
    private uatLimsApolloHlConfig: IApolloHl;
    private limsApolloHlConfig: IApolloHl;
    private pendingRequests: Array<(token: string) => void> = [];
    private unAuthorizedRoute = ['/API/LoginAPIDynamic'];

    constructor(
        private configService: ConfigService,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    ) {
        this.uatLimsApolloHlConfig = this.configService.get(
            'microService.uatLimsHl',
        );

        this.limsApolloHlConfig = this.configService.get(
            'microService.limsApolloHl',
        );

        console.log({ configApolloHl: this.uatLimsApolloHlConfig });
        console.log({ configLimsApolloHl: this.limsApolloHlConfig });

        this.logger.info(
            'Printing uatlims apollohl service gateway config :',
            this.uatLimsApolloHlConfig,
        );

        this.axiosClient = axios.create({
            baseURL: `${this.limsApolloHlConfig.url}`,
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
            const { url, username, password, client } = this.limsApolloHlConfig;
            const loginUrl = `${url}${UAT_LIMS_APOLLO_ROUTES.login}`;
            console.log({ loginUrl });

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
            this.logger.info('api token', { result });

            return result[0].Token;
        } catch (error: any) {
            throw new HttpException(error.message, error?.response?.status);
        }
    }

    public async verifyCoupon(couponData: any) {
        couponData = { ...couponData, Client: this.limsApolloHlConfig.client };
        this.logger.info('inside verify coupon service gateway api', {
            couponData,
        });
        try {
            const formData = new FormData();

            formData.append('CouponData', JSON.stringify(couponData));

            const result = await this.axiosClient.post(
                `${UAT_LIMS_APOLLO_ROUTES.validateCouponProd}`,
                formData,
                { headers: { ...formData.getHeaders() }, timeout: 120000 },
            );
            this.logger.info('inside verify coupon api service gateway', {
                result,
                resData: result?.data,
            });

            return result?.data;
        } catch (error: any) {
            console.trace(error);
            this.logger.error('Error in verifying coupon:', error.message);
            throw new HttpException(
                error.message,
                error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
