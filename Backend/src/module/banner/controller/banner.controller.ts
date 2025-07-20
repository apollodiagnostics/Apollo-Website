import { Controller, Get, Query, Param } from '@nestjs/common';
import { BannerService } from '../service/banner.service';
import { QueryDto } from 'src/module/banner/dto/banner_query.dto';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { ParamDto } from '../dto/banner_param.dto';
import { bannerResponseName } from 'src/constants/response/banner/banner_response.constants';
@Controller()
export class BannerController {
    constructor(private bannerService: BannerService) {}
    @Get()
    @ResponseCustom(bannerResponseName.ALL_BANNER_FETCHED)
    async getAllBanners(@Query() query: QueryDto) {
        return await this.bannerService.getAllBanners(
            query.limit,
            query.offset,
        );
    }

    @Get(':id')
    @ResponseCustom(bannerResponseName.BANNER_FETCHED)
    async getBannerById(@Param() param: ParamDto) {
        return await this.bannerService.getBannerById(param.id);
    }
}
