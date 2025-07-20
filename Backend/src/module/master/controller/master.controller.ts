import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { responseName } from 'src/constants/response';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { CategoryDto } from '../dto/category.dto';
import { ConditionDto } from '../dto/condition.dto';
import { LocationDto } from '../dto/location.dto';
import { MasterService } from '../service/master.service';
import { ParamIdDto } from '../dto/param.dto';
import { ApolloDynamicRoasterServiceGateway } from 'src/service-gateway/service/apollo_dynamic_roaster.service';
import { QueryGetAllSlotsData } from 'src/service-gateway/interface/apollo_dynamic_roaster';
import { LoggerService } from 'src/utils/debugger/service/logger.service';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { ITEM_ERROR } from 'src/constants/error';

@Controller()
export class MasterController {
    constructor(
        private readonly masterService: MasterService,
        private readonly apolloDynamicRoasterService: ApolloDynamicRoasterServiceGateway,
        private logger: LoggerService,
    ) {}

    @Get('condition/:id')
    @ResponseCustom(responseName.GET_ALL_CONDITIONS)
    async getConditionById(@Param() param: ParamIdDto) {
        return await this.masterService.getConditionById(param.id);
    }

    @Get('category')
    @ResponseCustom(responseName.GET_ALL_CATEGORY)
    async getAllCategory(@Query() popular: CategoryDto) {
        return await this.masterService.getAllCategory(popular);
    }

    @Get('location')
    @ResponseCustom(responseName.GET_ALL_LOCATIONS)
    async getAllLocations(@Query() location: LocationDto) {
        return await this.masterService.getAllLocations(location);
    }

    @Get('location/states')
    @ResponseCustom(responseName.GET_ALL_LOCATIONS)
    async getAllStates(@Query() location: LocationDto) {
        return await this.masterService.getAllStates(
            location.limit,
            location.offset,
        );
    }

    @Get('location/cities')
    @ResponseCustom(responseName.GET_ALL_LOCATIONS)
    async getAllCities(@Query() location: LocationDto) {
        const { stateId, cityId, areaId, limit, offset } = location;
        return await this.masterService.getAllCities(
            stateId,
            cityId,
            areaId,
            limit,
            offset,
        );
    }

    @Get('condition')
    @ResponseCustom(responseName.GET_ALL_CONDITIONS)
    async getAllCondition(@Query() condition: ConditionDto) {
        const { slug, cityId, stateId, limit, offset } = condition;
        return await this.masterService.getAllCondition(
            slug,
            cityId,
            stateId,
            limit,
            offset,
        );
    }

    @Get('category/:id')
    @ResponseCustom(responseName.GET_ALL_CATEGORY)
    async getCategoryById(@Param() param: ParamIdDto) {
        const data = await this.masterService.getCategoryById(param.id);
        return data.dataValues;
    }

    @Post('check-serviceability')
    @ResponseCustom(responseName.CHECK_SERVICEABILITY)
    async checkServiceability(@Body() payload: QueryGetAllSlotsData) {
        try {
            this.logger.info('Checking serviceability with payload:', payload);
            const result =
                await this.apolloDynamicRoasterService.checkServiceability(
                    payload,
                );
            return result;
        } catch (error: any) {
            this.logger.error(
                'Error in checkServiceability:',
                error.message || error,
            );
            throw new HttpExceptionWrapper(ITEM_ERROR.SERVICE_UNAVAILABLE, {
                errors: error.message || error,
            });
        }
    }

    @Post('available-slots')
    @ResponseCustom(responseName.GET_AVAILABLE_SLOTS)
    async availableSlots(@Body() payload: QueryGetAllSlotsData) {
        try {
            this.logger.info('Fetching available slots with payload:', payload);
            const result =
                await this.apolloDynamicRoasterService.getAvailableSlots(
                    payload,
                );
            return result;
        } catch (error: any) {
            this.logger.error(
                'Error in availableSlots:',
                error.message || error,
            );
            throw new HttpExceptionWrapper(ITEM_ERROR.NO_SLOTS_AVAILABLE, {
                errors: error.message || error,
            });
        }
    }
}
