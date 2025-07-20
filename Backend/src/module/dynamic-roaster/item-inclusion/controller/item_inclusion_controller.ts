import { Controller, Get, Query } from '@nestjs/common';
import { ItemInclusionService } from '../service/item_inclusion_service';
import { ItemInclusionQueryDto } from '../dto/item_inclusion_body.dto';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';

@Controller()
export class ItemInclusionController {
    constructor(private itemInclusionService: ItemInclusionService) {}
    @ResponseCustom(responseName.GET_ALL_ITEMS)
    @Get('item-inclusion')
    async itemInclusion(@Query() query: ItemInclusionQueryDto) {
        return await this.itemInclusionService.itemInclusion(query);
    }
}
