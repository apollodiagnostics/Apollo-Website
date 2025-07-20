import { Module } from '@nestjs/common';
import { UhidProfileController } from './controller/uhid_profile.controller';
import { UhidProfileService } from './service/uhid_profile.service';
import { UhidProfileRepository } from './repository/uhid_profile.repository';

@Module({
    imports: [],
    controllers: [UhidProfileController],
    providers: [UhidProfileRepository, UhidProfileService],
    exports: [],
})
export class UhidProfileModule {}
