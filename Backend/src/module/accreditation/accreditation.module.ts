import { Module } from '@nestjs/common';
import { AccreditationService } from './service/accreditation.service';
import { AccreditationRepository } from './repository/accreditation.repository';
import { AccreditationController } from './controller/accreditation.controller';
@Module({
    imports: [],
    providers: [AccreditationService, AccreditationRepository],
    controllers: [AccreditationController],
    exports: [],
})
export class AccreditationModule {}
