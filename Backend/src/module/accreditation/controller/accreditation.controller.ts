import { Controller, Get, Param, Query } from '@nestjs/common';
import { AccreditationQueryDto } from '../dto/accreditation_query.dto';
import { AccreditationIdDto } from '../dto/accreditation_param.dto';
import { AccreditationService } from '../service/accreditation.service';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';

@Controller()
export class AccreditationController {
    constructor(private accreditationService: AccreditationService) {}
    @Get()
    @ResponseCustom(responseName.RECORD_FETCHED)
    async getAllAccreditation(@Query() query: AccreditationQueryDto) {
        return await this.accreditationService.getAllAccreditation(
            query.limit,
            query.offset,
        );
    }

    @Get(':id')
    @ResponseCustom(responseName.RECORD_FETCHED)
    async getAccreditationById(@Param() param: AccreditationIdDto) {
        return await this.accreditationService.getAccreditationById(param.id);
    }
}
