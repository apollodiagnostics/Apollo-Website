import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import {
    IApolloDynamicRoasterConfig,
    QueryGetAllSlotsData,
} from '../interface/apollo_dynamic_roaster';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { APOLLO_DYNAMIC_ROASTER } from '../constant/apollo_dynamic_roaster.constants';
import { BlockSlotDto } from 'src/module/payment/dto/block_slot.dto';
import {
    CancelSlots,
    RescheduleSlots,
} from 'src/module/home-collection/constants/home_collection.constants';
import { BookSlots } from 'src/module/payment/constants/payment.constants';

@Injectable()
export class ApolloDynamicRoasterServiceGateway {
    private axiosClient: AxiosInstance;
    private authToken: string | null = null;
    private authTokenExpireAt: number | null = null;
    private isRefreshingToken: boolean = false;
    private pendingRequests: Array<(token: string) => void> = [];
    private apolloDynamicRoasterConfig: IApolloDynamicRoasterConfig;

    constructor(
        private configService: ConfigService,
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
    ) {
        this.apolloDynamicRoasterConfig = this.configService.get(
            'microService.apolloDynamicRoaster',
        );

        this.logger.info(
            'Printing apollo dynamic roster service gateway:',
            this.apolloDynamicRoasterConfig,
        );
        this.axiosClient = axios.create({
            baseURL: `${this.apolloDynamicRoasterConfig.url}`,
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
        if (!this.authTokenExpireAt) return true;
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
            const hourInMillis = 60 * 60 * 1000;
            this.authTokenExpireAt = Date.now() + hourInMillis;

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

    private async getAuthToken(): Promise<string> {
        try {
            const { url, username, password, grantType, source } =
                this.apolloDynamicRoasterConfig;
            const loginUrl = `${url}${APOLLO_DYNAMIC_ROASTER.login}`;

            const response = await axios.post(loginUrl, {
                username: username,
                password: password,
                grantType: grantType,
                source: source,
            });
            const result = response.data.access_token;

            if (!result) {
                throw new HttpException(
                    'Failed to retrieve token',
                    HttpStatus.UNAUTHORIZED,
                );
            }

            return result;
        } catch (error: any) {
            throw new HttpException(error.message, error?.response?.status);
        }
    }

    public async blockSlot(blockSlotData: BlockSlotDto) {
        try {
            const domain = this.apolloDynamicRoasterConfig.url;
            const url = `${domain}${APOLLO_DYNAMIC_ROASTER.blockSlot}`;
            this.logger.info('Printing block slot url:', url);

            const result = await this.axiosClient.post(url, blockSlotData, {
                timeout: 120000,
            });

            return result.data;
        } catch (error: any) {
            this.logger.error(
                'Printing service gateway block slot error',
                error,
            );
            throw new HttpException(
                error?.response?.data?.message,
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    public async bookSlot(bookSlotData: BookSlots) {
        try {
            const domain = this.apolloDynamicRoasterConfig.url;
            const url = `${domain}${APOLLO_DYNAMIC_ROASTER.bookSlot}`;
            this.logger.info('Printing book slot url:', url);
            const result = await this.axiosClient.post(url, bookSlotData, {
                timeout: 120000,
            });

            return result.data;
        } catch (error: any) {
            this.logger.error(
                'Printing book slot service gateway error',
                error,
            );
            throw new HttpException(error.message, error?.response?.status);
        }
    }

    public async rescheduleSlot(rescheduleData: RescheduleSlots) {
        try {
            const domain = this.apolloDynamicRoasterConfig.url;
            const url = `${domain}${APOLLO_DYNAMIC_ROASTER.rescheduleSlot}`;
            this.logger.info('Printing reschedule slot url:', url);
            const result = await this.axiosClient.post(url, rescheduleData, {
                timeout: 120000,
            });
            return result.data;
        } catch (error: any) {
            this.logger.error(
                'Printing reschedule slot service gateway  error ',
                error,
            );
            throw new HttpException(error.message, error?.response?.status);
        }
    }

    public async cancelOrder(cancelSingleOrderData: CancelSlots) {
        try {
            const domain = this.apolloDynamicRoasterConfig.url;
            const url = `${domain}${APOLLO_DYNAMIC_ROASTER.cancelSingleOrder}`;
            this.logger.info('Printing cancel order url:', url);
            const result = await this.axiosClient.post(
                url,
                cancelSingleOrderData,
                {
                    timeout: 120000,
                },
            );

            return result.data;
        } catch (error: any) {
            this.logger.error(
                'Printing cancel order service gateway error',
                error,
            );
            throw new HttpException(error.message, error?.response?.status);
        }
    }

    public async checkServiceability(payload: QueryGetAllSlotsData) {
        try {
            const domain = this.apolloDynamicRoasterConfig.url;
            const url = `${domain}${APOLLO_DYNAMIC_ROASTER.checkServiceability}`;
            this.logger.info('Printing check serviceability url:', url);
            const result = await this.axiosClient.post(url, payload);
            console.log({ result: result.data });

            return result.data;
        } catch (error: any) {
            console.log(error);

            this.logger.error(
                'Printing check serviceability error here',
                error.message || error,
            );
            throw new HttpException(error.message, error?.response?.status);
        }
    }

    public async getAvailableSlots(payload: QueryGetAllSlotsData) {
        try {
            const domain = this.apolloDynamicRoasterConfig.url;
            const url = `${domain}${APOLLO_DYNAMIC_ROASTER.availableSlots}`;
            this.logger.info('Printing get available slots url:', url);
            const result = await this.axiosClient.post(url, payload);
            console.log({ result: result.data });
            return result.data;
        } catch (error: any) {
            console.log(error);

            this.logger.error(
                'Printing get available slots error',
                error.message || error,
            );
            throw new HttpException(error.message, error?.response?.status);
        }
    }
}
