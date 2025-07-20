import { Body, Controller, Inject, Post, Request, Res } from '@nestjs/common';
import { PaymentService } from '../service/payment.service';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';
import { InitiatePaymentDto } from '../dto/initiate_payment.dto';
import { CouponValidationRequestDto } from '../dto/coupon_data.dto';

@Controller()
export class PaymentController {
    constructor(
        private paymentInitiateService: PaymentService,
        private configService: ConfigService,
        @Inject(WINSTON_MODULE_PROVIDER)
        private readonly logger: Logger,
    ) {}
    @Post('initiate')
    @ResponseCustom(responseName.HOME_COLLECTION_CREATED)
    async initiatePayment(@Body() info: InitiatePaymentDto) {
        return await this.paymentInitiateService.initiatePayment(info);
    }

    @Post('success')
    async successPayment(@Request() req: any, @Res() res: Response) {
        try {
            await this.paymentInitiateService.successPayment(req.body);

            const apolloFrontendDomain = this.configService.get(
                'itdose.apolloFrontendUrl',
            );

            return res.redirect(`${apolloFrontendDomain}/payment/success`);
        } catch (err) {
            this.logger.error(' Printing error in payment  ::', err);
            throw err;
        }
    }

    @Post('failed')
    async failedPayment(@Request() req: any, @Res() res: Response) {
        this.logger.info({ req });
        try {
            await this.paymentInitiateService.failedPayment(req.body);
            const apolloFrontendDomain = this.configService.get(
                'itdose.apolloFrontendUrl',
            );
            return res.redirect(`${apolloFrontendDomain}/payment/fail`);
        } catch (err) {
            this.logger.error(' Printing error in payment failed ::', { req });
        }
    }

    @Post('validate-coupon')
    async verifyCoupon(
        @Body() coupons: CouponValidationRequestDto,
    ): Promise<any> {
        this.logger.info('inside validate coupon api controller...', coupons);

        const CLIENT_NAME = 'Website';
        coupons = { ...coupons, Client: CLIENT_NAME };

        return await this.paymentInitiateService.validateCoupon(coupons);
    }
}
