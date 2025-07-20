import { Injectable } from '@nestjs/common';
import { Prescription } from '../entity/prescription.entity';
import { CreateUserDto } from '../dto/create_user.dto';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { PRESCRIPTION_ERROR } from 'src/constants/error';
import { UhidProfile } from 'src/module/user-uhid-profile/entity/uhid_profile.entity';

@Injectable()
export class PrescriptionRepository {
    async getAllUser(
        limitNum: number,
        offsetNum: number,
        mobileNumber: string,
    ) {
        return await Prescription.findAndCountAll({
            where: { mobile_number: mobileNumber },
            limit: limitNum,
            offset: offsetNum,
            raw: true,
        });
    }

    async getUserById(id: number) {
        const user = await Prescription.findOne({
            where: { id: id },
            raw: true,
        });
        if (!user)
            throw new HttpExceptionWrapper(PRESCRIPTION_ERROR.USER_NOT_FOUND);

        return user;
    }

    async createUser(obj: CreateUserDto) {
        const id = obj.profileId;
        const user = await UhidProfile.findOne({ where: { profileId: id } });
        const detail = {
            name: user.firstname,
            mobile_number: user.mobilenumber,
            image_url: obj.image_url,
        };
        return (await Prescription.create(detail)).toJSON();
    }
}
