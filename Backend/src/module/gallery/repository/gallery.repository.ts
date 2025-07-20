import { Injectable } from '@nestjs/common';
import { GalleryDto } from '../dto/gallery.dto';
import { Gallery } from '../entity/gallery.entity';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { MASTER_ERROR } from 'src/constants/error/errors/master';

@Injectable()
export class GalleryRepository {
    constructor() {}
    async getAllGalleryDetails(options: GalleryDto): Promise<Gallery[]> {
        return await Gallery.findAll({
            ...(options.id && { where: { id: options.id } }),
            attributes: { exclude: ['image_date', 'created_at', 'updated_at'] },
            limit: options.limit || 10,
            offset: options.offset || 0,
        });
    }

    async getAllGalleryDetailsById(id: number) {
        const gallery = await Gallery.findOne({
            where: { id },
            attributes: { exclude: ['created_at', 'updated_at', 'date'] },
        });
        if (!gallery) {
            throw new HttpExceptionWrapper(
                MASTER_ERROR.GALLERY_DETAILS_NOT_FOUND,
            );
        }
        return gallery;
    }
}
