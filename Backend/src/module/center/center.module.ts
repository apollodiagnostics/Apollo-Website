import { Module } from '@nestjs/common';
import { CenterRepository } from './repository/center.repository';
import { CenterService } from './service/center.service';
import { CenterController } from './controller/center.controller';
import { DatabaseModule } from 'src/database/database.module';
@Module({
    imports: [DatabaseModule],
    providers: [CenterRepository, CenterService],
    controllers: [CenterController],
    exports: [],
})
export class CenterModule {}
