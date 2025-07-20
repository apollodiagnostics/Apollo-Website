import { Module } from '@nestjs/common';
import { CenterVisitSlotsController } from './controller/center_visit_slots.controller';
import { CenterVisitSlotsRepository } from './repository/center_visit_slots.repository';
import { CenterVisitSlotsService } from './service/center_visit_slots.service';

@Module({
    imports: [],
    controllers: [CenterVisitSlotsController],
    providers: [CenterVisitSlotsRepository, CenterVisitSlotsService],
    exports: [],
})
export class CenterVisitSlotsModule {}
