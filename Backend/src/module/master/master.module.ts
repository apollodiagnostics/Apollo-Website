import { Module } from '@nestjs/common';
import { MasterController } from './controller/master.controller';
import { MasterService } from './service/master.service';
import { MasterRepository } from './repository/master.repository';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';

@Module({
    controllers: [MasterController],
    providers: [MasterService, MasterRepository],
    exports: [MasterRepository],
    imports: [ServiceGatewayModule],
})
export class MasterModule {}
