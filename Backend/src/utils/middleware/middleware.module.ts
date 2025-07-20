import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CorsMiddleware } from './cors/cors.middleware';
import { JwtMiddleware } from './verify-token/verify-token.middlware';
import { SecurityHeadersMiddleware } from './security/security-headers.middleware';

// Proxy middlewares

@Module({
    imports: [],
    providers: [ConfigService, JwtMiddleware],
})
export class MiddlewareModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(CorsMiddleware).forRoutes('*');
        consumer.apply(SecurityHeadersMiddleware).forRoutes('*');
        consumer
            .apply(JwtMiddleware)
            .exclude({ path: '*', method: RequestMethod.OPTIONS })
            .forRoutes(
                '/v1/uhid-profile',
                '/v1/uhid-profile/*',
                '/v1/prescription',
            );
    }
}
