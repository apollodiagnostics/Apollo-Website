import { Controller, Get, Param, Query } from '@nestjs/common';
import { CareerService } from '../service/career.service';
import { QueryDto } from '../dto/career_query.dto';
import { ParamDto } from '../dto/career_param.dto';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';

@Controller()
export class CareerController {
    constructor(private careerService: CareerService) {}
    @Get()
    @ResponseCustom(responseName.RECORD_FETCHED)
    async getAllCareer(@Query() query: QueryDto) {
        return await this.careerService.getAllCareer(query.limit, query.offset);
    }

    @Get(':id')
    @ResponseCustom(responseName.RECORD_FETCHED)
    async getCareerById(@Param() param: ParamDto) {
        return await this.careerService.getCareerById(param.id);
    }
}
