import { Module } from '@nestjs/common';
import { CareerRepository } from './repository/career.repository';
import { CareerService } from './service/career.service';
import { CareerController } from './controller/career.controller';

@Module({
    imports: [],
    providers: [CareerRepository, CareerService],
    controllers: [CareerController],
    exports: [],
})
export class CareerModule {}
