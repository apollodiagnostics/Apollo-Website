// src/services/your-api-gateway.service.ts
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import * as FormData from 'form-data';
import { GetChargeDetailDto } from 'src/module/get-charge-detail/dto/get_charge_detail.dto';
import { IItDoseDynamicRosterConfig } from '../interface/itdose_dynamicroster.interface';
import { ITDOSE_DYNAMIC_ROSTER_ROUTE } from '../constant/itdose_dynamicroster.constant';
import { IBookHomeCollectionInfo } from '../interface/hc_apollo_diagnostics.interface';
@Injectable()
export class ApolloHlService {
    private axiosClient: AxiosInstance;
    private authToken: string | null = null;
    private authTokenExpireAt: number | null = null;
    private isRefreshingToken: boolean = false;
    private pendingRequests: Array<(token: string) => void> = [];
    private itDosDynamicRosterConfig: IItDoseDynamicRosterConfig;

    constructor(
        private configService: ConfigService,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    ) {
        this.itDosDynamicRosterConfig = this.configService.get(
            'microService.limsApolloHl',
        );

        this.axiosClient = axios.create({
            baseURL: `${this.itDosDynamicRosterConfig.url}`,
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
            const { url, username, password, client } =
                this.itDosDynamicRosterConfig;
            const loginUrl = `${url}${ITDOSE_DYNAMIC_ROSTER_ROUTE.login}`;

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

    public async getChargeDetail(body: GetChargeDetailDto) {
        try {
            const domain = this.itDosDynamicRosterConfig.url;
            const url = `${domain}${ITDOSE_DYNAMIC_ROSTER_ROUTE.url}`;

            const formData = new FormData();
            formData.append('ItemID', body.ItemID);
            formData.append('TotalBillAmount', body.TotalBillAmount.toString());
            formData.append('StateId', body.StateId);
            formData.append('minMaxRadius', body.minMaxRadius.toString());

            const result = await this.axiosClient.post(url, formData, {
                headers: { ...formData.getHeaders() },
                timeout: 120000,
            });

            return result.data;
        } catch (error: any) {
            this.logger.error('Error in getChargeDetail:', error.message);
            throw new HttpException(
                error.message,
                error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    public async bookHomeCollection(data: IBookHomeCollectionInfo) {
        try {
            const {
                HomeCollectionData,
                HomeCollectionChargeData = [],
                CouponData,
            } = data;
            console.log({ CouponData });

            this.logger.info('Home Collection Data', { HomeCollectionData });
            this.logger.info('Home Collection Charge Data', {
                HomeCollectionChargeData,
            });
            this.logger.info('Home Collection Coupon Data', {
                CouponData,
            });

            const formData = new FormData();
            formData.append(
                'HomeCollectionData',
                JSON.stringify(HomeCollectionData),
            );
            formData.append(
                'HomeCollectionChargeData',
                JSON.stringify(HomeCollectionChargeData),
            );
            if (CouponData && CouponData.length > 0) {
                formData.append('CouponData', JSON.stringify(CouponData));
            }
            console.log({ formData });

            const domain = this.itDosDynamicRosterConfig.url;
            const url = `${domain}${ITDOSE_DYNAMIC_ROSTER_ROUTE.bookHomeCollection}`;

            const result = await this.axiosClient.post(url, formData, {
                headers: { ...formData.getHeaders() },
                timeout: 120000,
            });

            this.logger.info('printing home collection data', result.data);

            return result.data;
        } catch (error: any) {
            this.logger.error(
                'error in book home collection api service gateway',
                { error: error?.response },
            );
            console.trace(error);
            throw new HttpException(error.message, error?.response?.status);
        }
    }

    public async rescheduleHomeCollection(data: any) {
        try {
            const formData = new FormData();
            formData.append('Client', data.client.toString());
            formData.append('PrebookingID', data.preBookingId.toString());
            formData.append(
                'PrebookingID_Digital',
                data?.preBookingIdDigital.toString(),
            );
            formData.append('NewAppDate', data.newAppDate.toString());

            const domain = this.itDosDynamicRosterConfig.url;
            const url = `${domain}${ITDOSE_DYNAMIC_ROSTER_ROUTE.rescheduleHomeCollection}`;
            const result = await this.axiosClient.post(url, formData, {
                headers: { ...formData.getHeaders() },
                timeout: 120000,
            });

            return result.data;
        } catch (error: any) {
            throw new HttpException(error.message, error?.response?.status);
        }
    }

    public async cancelHomeCollection(data: any) {
        try {
            const formData = new FormData();
            formData.append('Client', data.client.toString());
            formData.append('PrebookingID', data.preBookingId.toString());
            formData.append('CancelRemarks', data.cancelRemarks.toString());
            formData.append('CancelAllUHIDs', data.cancelAllUhids.toString());
            formData.append(
                'PrebookingID_Digital',
                data?.preBookingIdDigital.toString(),
            );

            const domain = this.itDosDynamicRosterConfig.url;
            const url = `${domain}${ITDOSE_DYNAMIC_ROSTER_ROUTE.cancelHomeCollection}`;
            const result = await this.axiosClient.post(url, formData, {
                headers: { ...formData.getHeaders() },
                timeout: 120000,
            });

            return result.data;
        } catch (error: any) {
            throw new HttpException(error.message, error?.response?.status);
        }
    }
}
