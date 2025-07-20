import { Module } from '@nestjs/common';
import { ItDoseLoginController } from './controller/it_dose_login.controller';
import { ItDoseLoginService } from './service/it_dose_login.service';

@Module({
    imports: [],
    controllers: [ItDoseLoginController],
    providers: [ItDoseLoginService],
    exports: [],
})
export class ItDoseLoginModule {}
