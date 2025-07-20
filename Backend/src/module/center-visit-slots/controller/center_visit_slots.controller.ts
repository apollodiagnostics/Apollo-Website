import { Controller, Get, Param, Query } from '@nestjs/common';
import { ParamDto } from '../dto/center_visit_slots_param.dto';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';
import { QueryDto } from '../dto/center_visit_slots_query.dto';
import { CenterVisitSlotsService } from '../service/center_visit_slots.service';
@Controller()
export class CenterVisitSlotsController {
    constructor(private centerVisitSlotsService: CenterVisitSlotsService) {}
    @Get()
    @ResponseCustom(responseName.ALL_SLOTS_FETCHED)
    async getAllCenterVisitSlots(@Query() info: QueryDto) {
        return await this.centerVisitSlotsService.getAllCenterVisitSlots(
            info.limit,
            info.offset,
        );
    }

    @Get(':id')
    @ResponseCustom(responseName.SLOT_FETCHED)
    async getCenterVisitSlotsById(@Param() param: ParamDto) {
        return await this.centerVisitSlotsService.getCenterVisitSlotsById(
            param.id,
        );
    }
}
