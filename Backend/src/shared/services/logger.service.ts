import { Injectable, Logger, Inject, Optional } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger as WinstonLogger } from 'winston';

@Injectable()
export class LoggerService {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER)
        @Optional()
        private readonly logger: WinstonLogger,
    ) {}

    info(message: string) {
        if (this.logger) {
            this.logger.info(message);
        } else {
            // Fallback to the default logger if not provided
            Logger.log(message);
        }
    }

    log(message: string) {
        if (this.logger) {
            this.logger.log('info', message);
        } else {
            // Fallback to the default logger if not provided
            Logger.log(message);
        }
    }

    error(message: string, trace: string) {
        if (this.logger) {
            this.logger.error(message, trace);
        } else {
            // Fallback to the default logger if not provided
            Logger.error(message, trace);
        }
    }

    // You can add other methods as needed

    // Example usage:
    myFunction() {
        this.log('This is a log message');
        this.error('This is an error message', 'Error stack trace');
    }
}
