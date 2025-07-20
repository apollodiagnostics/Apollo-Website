import { Module } from '@nestjs/common';
import { ItemInclusionController } from './controller/item_inclusion_controller';
import { ItemInclusionService } from './service/item_inclusion_service';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';

@Module({
    imports: [ServiceGatewayModule],
    controllers: [ItemInclusionController],
    providers: [ItemInclusionService],
    exports: [ItemInclusionService],
})
export class DynamicRoasterModule {}
