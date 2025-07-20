import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ItDoseLoginService } from '../service/it_dose_login.service';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';
import { FileInterceptor } from '@nestjs/platform-express';
import { ItDoseDto } from '../dto/it_dose_login.dto';
@Controller()
export class ItDoseLoginController {
    constructor(private itDoseLoginService: ItDoseLoginService) {}
    @UseInterceptors(FileInterceptor('file'))
    @Post()
    @ResponseCustom(responseName.LOGIN)
    async login(@Body() body: ItDoseDto) {
        return await this.itDoseLoginService.login(body);
    }
}
