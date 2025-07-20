import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { GetChargeDetailService } from '../service/get_charge_service';
import { FileInterceptor } from '@nestjs/platform-express';
import { GetChargeDetailDto } from '../dto/get_charge_detail.dto';

@Controller()
export class GetChargeDetailController {
    constructor(private getChargeService: GetChargeDetailService) {}
    @UseInterceptors(FileInterceptor('file'))
    @Post()
    async getChargeController(@Body() body: GetChargeDetailDto) {
        return await this.getChargeService.getChargeDetail(body);
    }
}
