import { Module } from '@nestjs/common';
import { BannerRepository } from './repository/banner.repository';
import { BannerController } from './controller/banner.controller';
import { BannerService } from './service/banner.service';

@Module({
    imports: [],
    providers: [BannerRepository, BannerService],
    controllers: [BannerController],
    exports: [],
})
export class BannerModule {}
