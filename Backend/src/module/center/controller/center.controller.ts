import { Controller, Get, Query, Param } from '@nestjs/common';
import { CenterService } from '../service/center.service';
import { CenterQueryDto } from '../dto/center_query.dto';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { CenterIdDto } from '../dto/center_param.dto';
import { responseName } from 'src/constants/response';

@Controller()
export class CenterController {
    constructor(private centerService: CenterService) {}
    @Get()
    @ResponseCustom(responseName.ALL_CENTER_FETCHED)
    async getAllCenter(@Query() info: CenterQueryDto) {
        return await this.centerService.searchAllCenter(info);
    }

    @Get(':id')
    @ResponseCustom(responseName.CENTER_FETCHED)
    async getCenterById(@Param() param: CenterIdDto) {
        return await this.centerService.searchCenterById(param.id);
    }
}
