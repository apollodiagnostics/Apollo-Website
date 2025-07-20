import { Module } from '@nestjs/common';
import { EnquireRepository } from './repository/enquire_now.repository';
import { EnquireService } from './service/enquire_now.service';
import { EnquireController } from './controller/enquire_now.controller';
@Module({
    imports: [],
    providers: [EnquireRepository, EnquireService],
    controllers: [EnquireController],
    exports: [],
})
export class EnquireModule {}
