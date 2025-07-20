import { Injectable } from '@nestjs/common';
import { Banner } from '../entity/banner.entity';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { BANNER_ERROR } from 'src/constants/error/errors/banner';

@Injectable()
export class BannerRepository {
    async getAllBanners(limit: number, offset: number) {
        const detail = await Banner.findAndCountAll({
            limit: limit,
            offset: offset,
        });
        return detail;
    }

    async getBannerByid(bannerId: number) {
        const banner = await Banner.findOne({ where: { id: bannerId } });
        if (!banner) {
            throw new HttpExceptionWrapper(BANNER_ERROR.DATA_NOT_FOUND);
        }

        return banner;
    }
}
