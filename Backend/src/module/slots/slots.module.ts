import { Module } from '@nestjs/common';
import { BookSlotsController } from './controller/slots.controller';
import { BookSlotsService } from './service/slots.service';
import { BookSlotsRepository } from './repository/slots.repository';

@Module({
    imports: [],
    providers: [BookSlotsService, BookSlotsRepository],
    controllers: [BookSlotsController],
    exports: [],
})
export class SlotsModule {}
