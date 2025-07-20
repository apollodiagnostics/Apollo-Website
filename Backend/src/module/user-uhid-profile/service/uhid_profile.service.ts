import { Injectable } from '@nestjs/common';
import { UhidProfileRepository } from '../repository/uhid_profile.repository';
import { CreateUserDto } from '../dto/create_user.dto';
import { UpdateUserDto } from '../dto/update_user.dto';
import { CreateAddressDto } from '../dto/create_adress.dto';
import { GetAddressDto } from '../dto/get_address_query.dto';
import { UpdateAddressDto } from '../dto/update_address.dto';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { UHID_PROFILE_ERROR } from 'src/constants/error';
import { LoggerService } from 'src/utils/debugger/service/logger.service';

@Injectable()
export class UhidProfileService {
    constructor(
        private uhidProfileRepository: UhidProfileRepository,
        private logger: LoggerService,
    ) {}
    async getAllProfile(
        limit: number,
        offset: number,
        profileId: number,
        mobileNumber: string,
    ) {
        return await this.uhidProfileRepository.getAllProfile(
            limit,
            offset,
            profileId,
            mobileNumber,
        );
    }

    async validateProfileId(id: number) {
        const profile = await this.getProfileById(id);
        if (!profile)
            throw new HttpExceptionWrapper(
                UHID_PROFILE_ERROR.PROFILE_NOT_FOUND,
            );
    }

    async getProfileById(id: number) {
        return await this.uhidProfileRepository.getProfileById(id);
    }

    async getAllProfileByMobileNumber(mobileNumber: any) {
        return await this.uhidProfileRepository.getAllProfileByMobileNumber(
            mobileNumber,
        );
    }

    async createUser(obj: CreateUserDto) {
        return await this.uhidProfileRepository.createUser(obj);
    }

    async updateUser(id: number, obj: UpdateUserDto) {
        return await this.uhidProfileRepository.UpdateUser(id, obj);
    }

    async createAddress(obj: CreateAddressDto) {
        return await this.uhidProfileRepository.createAddress(obj);
    }

    async getAllAddress(info: GetAddressDto, mobileNumber: string) {
        return await this.uhidProfileRepository.getAllAddress(
            info,
            mobileNumber,
        );
    }

    async deleteAddress(id: number) {
        return await this.uhidProfileRepository.deleteAddress(id);
    }

    async updateAddress(id: number, obj: UpdateAddressDto) {
        return await this.uhidProfileRepository.updateAddress(id, obj);
    }
    async getAllAddressByMobileNumber(mobileNumber: any) {
        return await this.uhidProfileRepository.getAllAddressByMobileNumber(
            mobileNumber,
        );
    }

    async deleteProfile(id: number) {
        this.logger.info('Delete Uhid profile service,', { id });
        return await this.uhidProfileRepository.deleteProfile(id);
    }
}
