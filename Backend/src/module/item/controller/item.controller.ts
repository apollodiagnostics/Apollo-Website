import { Controller, Get, Param, Query } from '@nestjs/common';
import { ItemQueryDto } from 'src/module/item/dto/item_query.dto';
import { TestService } from '../service/item.service';
import { ItemIdDto } from 'src/module/item/dto/item_param.dto';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';
@Controller()
export class TestController {
    constructor(private testService: TestService) {}

    @Get()
    @ResponseCustom(responseName.GET_ALL_ITEMS)
    async getAllItem(@Query() info: ItemQueryDto) {
        return await this.testService.getAllItem(info);
    }

    @Get('/discounts')
    @ResponseCustom(responseName.GET_GLOBAL_DISCOUNT)
    async getGlobalDiscount() {
        return await this.testService.getGlobalDiscount();
    }

    @Get(':id')
    @ResponseCustom(responseName.GET_ITEM)
    async getItemById(@Param() param: ItemIdDto) {
        return await this.testService.getItemById(param.id);
    }
}
