import { Module } from '@nestjs/common';
import ConfigModule from './config.module';
import { ErrorModule } from 'src/utils/error/error.module';
import { WinstonModule } from 'nest-winston';
import { DebuggerModule } from 'src/utils/debugger/debugger.module';
import { DatabaseModule } from 'src/database/database.module';
import { PaginationModule } from 'src/utils/pagination/pagination.module';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';
import { DebuggerService } from 'src/utils/debugger/service/debugger.service';
import { MiddlewareModule } from 'src/utils/middleware/middleware.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [
        // Config setup for environment file and values
        ConfigModule,

        MiddlewareModule,

        // Winston setup for logging
        WinstonModule.forRootAsync({
            inject: [DebuggerService],
            imports: [DebuggerModule],
            useFactory: (debuggerService: DebuggerService) =>
                debuggerService.createLogger(),
        }),

        // Error Module
        ErrorModule,

        // Database Modules
        DatabaseModule,

        // Pagination Modules
        PaginationModule,

        // ServiceGateway Module
        ServiceGatewayModule,

        // Rate Limiting
        ThrottlerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                return {
                    ttl: configService.get<number>('app.throttle.ttl'),
                    limit: configService.get<number>('app.throttle.limit'),
                };
            },
        }),
    ],
})
export class CoreModule {}
