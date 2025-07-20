import { Controller, Get, Param, Query } from '@nestjs/common';
import { GalleryDto } from '../dto/gallery.dto';
import { Gallery } from '../entity/gallery.entity';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { GalleryService } from '../service/gallery.service';
import { responseName } from 'src/constants/response';

@Controller()
export class GalleryController {
    constructor(private readonly galleryService: GalleryService) {}

    @Get(':id')
    @ResponseCustom(responseName.GET_ALL_GALLERY_DETAILS)
    async getAllGalleryDetailsById(@Param() param: GalleryDto) {
        return await this.galleryService.getAllGalleryDetailsById(param.id);
    }

    @Get()
    @ResponseCustom(responseName.GET_ALL_GALLERY_DETAILS)
    async getAllGalleryDetails(
        @Query() options: GalleryDto,
    ): Promise<Gallery[]> {
        return await this.galleryService.getAllGalleryDetails(options);
    }
}
