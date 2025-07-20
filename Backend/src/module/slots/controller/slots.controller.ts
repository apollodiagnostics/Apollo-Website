import { Body, Controller, Post } from '@nestjs/common';
import { SlotsDto } from '../dto/slots.dto';
import { BookSlotsService } from '../service/slots.service';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';

@Controller()
export class BookSlotsController {
    constructor(private bookSlotsService: BookSlotsService) {}
    @Post()
    @ResponseCustom(responseName.SLOTS_BOOKED)
    async bookSlots(@Body() info: SlotsDto) {
        return await this.bookSlotsService.bookSlots(info);
    }
}
