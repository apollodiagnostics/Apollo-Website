import { Injectable } from '@nestjs/common';
import { BannerRepository } from '../repository/banner.repository';
@Injectable()
export class BannerService {
    constructor(private bannerRepository: BannerRepository) {}

    async getAllBanners(limit: number, offset: number) {
        return await this.bannerRepository.getAllBanners(limit, offset);
    }

    async getBannerById(id: number) {
        return await this.bannerRepository.getBannerByid(id);
    }
}
