import { Module } from '@nestjs/common';
import { HomeCollectionRepository } from './repository/home_collection.repository';
import { HomeCollectionController } from './controller/home_collection.controller';
import { HomeCollectionService } from './service/home_collection.service';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';
import { DynamicRoasterModule } from '../dynamic-roaster/item-inclusion/dynamic_roaster_module';

@Module({
    imports: [ServiceGatewayModule, DynamicRoasterModule],
    controllers: [HomeCollectionController],
    providers: [HomeCollectionRepository, HomeCollectionService],
    exports: [],
})
export class HomeCollectionModule {}
