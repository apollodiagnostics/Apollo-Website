import { Module } from '@nestjs/common';
import { GalleryController } from './controller/gallery.controller';
import { GalleryService } from './service/gallery.service';
import { GalleryRepository } from './repository/gallery.repository';

@Module({
    imports: [],
    controllers: [GalleryController],
    providers: [GalleryService, GalleryRepository],
    exports: [GalleryRepository],
})
export class GalleryModule {}
