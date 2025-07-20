import { Module } from '@nestjs/common';
import { FaqController } from './controller/faq.controller';
import { FaqRepository } from './repository/faq.repository';
import { FaqService } from './service/faq.service';

@Module({
    imports: [],
    controllers: [FaqController],
    providers: [FaqRepository, FaqService],
    exports: [],
})
export class FaqModule {}
