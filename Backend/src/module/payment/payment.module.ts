import { Module } from '@nestjs/common';
import { PaymentController } from './controller/payment.controller';
import { PaymentService } from './service/payment.service';
import { PaymentRepository } from './repository/payment.repository';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';
import { DynamicRoasterModule } from '../dynamic-roaster/item-inclusion/dynamic_roaster_module';

@Module({
    imports: [ServiceGatewayModule, DynamicRoasterModule],
    controllers: [PaymentController],
    providers: [PaymentService, PaymentRepository],
    exports: [],
})
export class PaymentModule {}
