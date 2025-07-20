import { Controller, Get, Query } from '@nestjs/common';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { TopItemService } from '../service/top_item.service';
import { responseName } from 'src/constants/response';
import { ItemQueryDto } from '../dto/top_item_query.dto';

@Controller()
export class TopItemController {
    constructor(private packageService: TopItemService) {}
    @Get()
    @ResponseCustom(responseName.TOP_ITEM_FETCHED)
    async getAllTopPackage(@Query() info: ItemQueryDto) {
        return await this.packageService.getAllTopPackage(
            info.cityId,
            info.itemId,
            info.type,
            info.search,
            info.limit,
            info.offset,
        );
    }
}
