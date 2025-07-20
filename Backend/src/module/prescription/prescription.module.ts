import { Module } from '@nestjs/common';
import { PrescriptionService } from './service/prerscription.service';
import { PrescriptionRepository } from './repository/prescription.repository';
import { PrescriptionController } from './controller/prescription.controller';

@Module({
    imports: [],
    providers: [PrescriptionService, PrescriptionRepository],
    controllers: [PrescriptionController],
    exports: [],
})
export class PrescriptionModule {}
