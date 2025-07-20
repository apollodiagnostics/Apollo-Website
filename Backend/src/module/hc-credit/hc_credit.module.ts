import { Module } from '@nestjs/common';
import { HcCreditController } from './controller/hc_credit.controller';
import { HcCreditService } from './service/hc_credit.service';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';

@Module({
    imports: [ServiceGatewayModule],
    controllers: [HcCreditController],
    providers: [HcCreditService],
    exports: [],
})
export class HcCreditModule {}
