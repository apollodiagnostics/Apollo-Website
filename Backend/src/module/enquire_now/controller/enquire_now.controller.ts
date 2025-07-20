import { Body, Controller, Post } from '@nestjs/common';
import { EnquireDto } from '../dto/enquire_now.dto';
import { EnquireService } from '../service/enquire_now.service';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';
@Controller()
export class EnquireController {
    constructor(private enquireService: EnquireService) {}
    @Post()
    @ResponseCustom(responseName.USER_CREATED)
    async Enquire(@Body() obj: EnquireDto) {
        return await this.enquireService.Enquire(obj);
    }
}
