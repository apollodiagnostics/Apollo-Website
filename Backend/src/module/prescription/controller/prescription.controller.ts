import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { CreateUserDto } from '../dto/create_user.dto';
import { ParamDto } from '../dto/prescription_param.dto';
import { PrescriptionService } from '../service/prerscription.service';
import { QueryDto } from '../dto/prescription_query.dto';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';

@Controller()
export class PrescriptionController {
    constructor(private prescriptionService: PrescriptionService) {}
    @Get()
    @ResponseCustom(responseName.ALL_PRESCRIPTION_FETCHED)
    async getAllUSer(@Query() info: QueryDto, @Req() req: any) {
        return await this.prescriptionService.getAllUser(
            info.limit,
            info.offset,
            req.data,
        );
    }

    @Get(':id')
    @ResponseCustom(responseName.PRESCRIPTION_UPLOADED)
    async getUserById(@Param() param: ParamDto) {
        return await this.prescriptionService.getUserById(param.id);
    }

    @Post()
    @ResponseCustom(responseName.USER_CREATED)
    async createUser(@Body() obj: CreateUserDto) {
        return await this.prescriptionService.createUser(obj);
    }
}
