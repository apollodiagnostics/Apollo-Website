import { Injectable } from '@nestjs/common';
import { GalleryDto } from '../dto/gallery.dto';
import { GalleryRepository } from '../repository/gallery.repository';
@Injectable()
export class GalleryService {
    constructor(private readonly galleryRepository: GalleryRepository) {}
    async getAllGalleryDetails(options: GalleryDto) {
        const gallery = await this.galleryRepository.getAllGalleryDetails(
            options,
        );
        return gallery;
    }

    async getAllGalleryDetailsById(id: number) {
        const gallery = await this.galleryRepository.getAllGalleryDetailsById(
            id,
        );
        return { gallery };
    }
}
