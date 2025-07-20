import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { HomeCollectionService } from '../service/home_collection.service';
import { QueryDto } from '../dto/query.dto';
import { RescheduleDto } from '../dto/reshedule_home_collection.dto';
import { CancelHomeCollectionDto } from '../dto/cancel_home_collection.dto';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';
@Controller()
export class HomeCollectionController {
    constructor(private homeCollectionService: HomeCollectionService) {}
    @Get()
    @ResponseCustom(responseName.HOME_COLLECTIONS_FETCHED)
    async getAllHomeCollection(@Query() query: QueryDto) {
        return await this.homeCollectionService.getAllHomeCollection(
            query.mobileNumber,
        );
    }

    @Put('reschedule')
    @ResponseCustom(responseName.RESHEDULED)
    async rescheduleHomeCollection(@Body() body: RescheduleDto) {
        return await this.homeCollectionService.rescheduleHomeCollection(body);
    }

    @Post('cancel')
    @ResponseCustom(responseName.CANCELLED_HOME_COLLECTION)
    async cancelHomeCollection(@Body() body: CancelHomeCollectionDto) {
        return await this.homeCollectionService.cancelHomeCollection(body);
    }
}
