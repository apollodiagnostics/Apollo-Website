import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { AppRouterModule } from './app.router';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { CustomThrottlerGuard } from './throller.service';
import { AppController } from './app.controller';
@Module({
    imports: [
        CoreModule,
        AppRouterModule.register(),
        JwtModule.register({
            global: true,
            secret: 'secret',
            signOptions: { expiresIn: '10h' },
        }),
    ],
    controllers: [AppController],
    providers: [
        {
            provide: APP_GUARD,
            useClass: CustomThrottlerGuard,
        },
    ],
})
export class AppModule {}
