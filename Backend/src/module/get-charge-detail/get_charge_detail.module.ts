import { Module } from '@nestjs/common';
import { GetChargeDetailController } from './controller/get_charge_detail';
import { GetChargeDetailService } from './service/get_charge_service';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';

@Module({
    imports: [ServiceGatewayModule],
    controllers: [GetChargeDetailController],
    providers: [GetChargeDetailService],
    exports: [],
})
export class GetChargeDetailModule {}
