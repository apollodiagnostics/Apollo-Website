import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    Req,
} from '@nestjs/common';
import { UhidQueryDto } from '../dto/uhid_profile_query.dto';
import { UhidParamDto } from '../dto/uhid_profile_param.dto';
import { UhidProfileService } from '../service/uhid_profile.service';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';
import { CreateUserDto } from '../dto/create_user.dto';
import { UpdateUserDto } from '../dto/update_user.dto';
import { CreateAddressDto } from '../dto/create_adress.dto';
import { GetAddressDto } from '../dto/get_address_query.dto';
import { DeleteAddressDto } from '../dto/delete_address.dto';
import { UpdateAddressDto } from '../dto/update_address.dto';
import { LoggerService } from 'src/utils/debugger/service/logger.service';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { UHID_PROFILE_ERROR } from 'src/constants/error';

@Controller()
export class UhidProfileController {
    constructor(
        private uhidProfileService: UhidProfileService,
        private logger: LoggerService,
    ) {}

    @Post('address')
    @ResponseCustom(responseName.ADDRESS_CREATED)
    async createAddress(@Body() info: CreateAddressDto) {
        return await this.uhidProfileService.createAddress(info);
    }

    @Get('address')
    async getAllAddress(@Query() info: GetAddressDto, @Req() req: any) {
        return await this.uhidProfileService.getAllAddress(info, req.data);
    }

    @Delete('address/:id')
    @ResponseCustom(responseName.ADDRESS_DELETED)
    async deleteAddress(@Param() param: DeleteAddressDto, @Req() req: any) {
        const validAddresses =
            await this.uhidProfileService.getAllAddressByMobileNumber(req.data);
        const isAuthorized = validAddresses.some(
            (address) => address.address_id === param?.id,
        );
        if (!isAuthorized)
            throw new HttpExceptionWrapper(
                UHID_PROFILE_ERROR.ADDRESS_UPDATE_DENIED,
            );

        return await this.uhidProfileService.deleteAddress(param.id);
    }

    @Put('address/:id')
    @ResponseCustom(responseName.ADDRESS_UPDATED)
    async updateAddress(
        @Param() param: UhidParamDto,
        @Body() info: UpdateAddressDto,
        @Req() req: any,
    ) {
        const validAddresses =
            await this.uhidProfileService.getAllAddressByMobileNumber(req.data);
        const isAuthorized = validAddresses.some(
            (address) => address.address_id === param?.id,
        );
        if (!isAuthorized)
            throw new HttpExceptionWrapper(
                UHID_PROFILE_ERROR.ADDRESS_UPDATE_DENIED,
            );

        return await this.uhidProfileService.updateAddress(param.id, info);
    }

    @Put(':id')
    @ResponseCustom(responseName.USER_UPDATED)
    async updateUser(@Param() param: UhidParamDto, @Body() obj: UpdateUserDto) {
        return await this.uhidProfileService.updateUser(param.id, obj);
    }

    @Post()
    @ResponseCustom(responseName.USER_CREATED)
    async createUser(@Body() obj: CreateUserDto) {
        return await this.uhidProfileService.createUser(obj);
    }

    @Get(':id')
    @ResponseCustom(responseName.PROFILE_FETCHED)
    async getProfileById(@Param() param: UhidParamDto, @Req() req: any) {
        const validProfiles =
            await this.uhidProfileService.getAllProfileByMobileNumber(req.data);
        const isAuthorized = validProfiles.some(
            (profile) => profile.profileId === param?.id,
        );
        if (!isAuthorized)
            throw new HttpExceptionWrapper(
                UHID_PROFILE_ERROR.PROFILE_ACCESS_DENIED,
            );

        return await this.uhidProfileService.getProfileById(param.id);
    }

    @Get()
    @ResponseCustom(responseName.PROFILE_FETCHED)
    async getAllprofile(@Query() info: UhidQueryDto) {
        return await this.uhidProfileService.getAllProfile(
            info.limit,
            info.offset,
            info.profileId,
            info.mobileNumber,
        );
    }

    @Delete(':id')
    @ResponseCustom(responseName.PROFILE_DELETED)
    async removeProfile(@Param() { id }: UhidParamDto) {
        this.logger.info('Delete Uhid Profile Controller', { id });

        // validate the profile Id
        await this.uhidProfileService.validateProfileId(id);

        // delete the profile
        return await this.uhidProfileService.deleteProfile(id);
    }
}
