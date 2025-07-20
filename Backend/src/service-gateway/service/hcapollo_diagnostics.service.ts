import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import * as FormData from 'form-data';
import { IItemInclusionConfig } from '../interface/hcapollo_diagnostics.interface';
import { ITEM_INCLUSION_ROUTE } from '../constant/hcapollo_diagnostics.constant';

@Injectable()
export class ItemInclusionServiceGateway {
    private axiosClient: AxiosInstance;
    private authToken: string | null = null;
    private authTokenExpireAt: number | null = null;
    private isRefreshingToken: boolean = false;
    private itemInclusionConfig: IItemInclusionConfig;
    private pendingRequests: Array<(token: string) => void> = [];
    private unAuthorizedRoute = ['/API/LoginAPIDynamic'];

    constructor(
        private configService: ConfigService,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    ) {
        this.itemInclusionConfig = this.configService.get(
            'microService.hcApolloDiagnostics',
        );

        this.logger.info(
            'Printing hc apollo diagonistics service gateway:',
            this.itemInclusionConfig,
        );
        this.axiosClient = axios.create({
            baseURL: `${this.itemInclusionConfig.url}`,
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
            const oneHourInMillis = 60 * 60 * 1000;
            this.authTokenExpireAt = Date.now() + oneHourInMillis;

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

    // Function to fetch the auth token
    public async getAuthToken(): Promise<string> {
        try {
            const { url, username, password, client } =
                this.itemInclusionConfig;
            const loginUrl = `${url}${ITEM_INCLUSION_ROUTE.login}`;

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

    // Function to handle item inclusion request
    public async getItemInclusionBulk(itemIDList: number[]) {
        try {
            const formData = new FormData();
            formData.append('ItemIDList', JSON.stringify(itemIDList));

            const result = await this.axiosClient.post(
                `${ITEM_INCLUSION_ROUTE.getItemInclusionBulk}`,
                formData,
                { headers: { ...formData.getHeaders() }, timeout: 120000 },
            );

            return result.data;
        } catch (error: any) {
            this.logger.error('Error fetching item inclusion:', error.message);
            throw new HttpException(
                error.message,
                error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
