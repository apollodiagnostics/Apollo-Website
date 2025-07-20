import { Module } from '@nestjs/common';
import { LoggerService } from './services/logger.service';

/**
 * Module to imported in main
 */
@Module({
    imports: [],
    providers: [LoggerService],
    exports: [LoggerService],
})
export class SharedModule {}
