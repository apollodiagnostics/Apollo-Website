import { Injectable } from '@nestjs/common';
import { UhidProfile } from '../entity/uhid_profile.entity';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { UHID_PROFILE_ERROR } from 'src/constants/error';
import { CreateUserDto } from '../dto/create_user.dto';
import { Address } from '../entity/address.entity';
import { UpdateUserDto } from '../dto/update_user.dto';
import { CreateAddressDto } from '../dto/create_adress.dto';
import { GetAddressDto } from '../dto/get_address_query.dto';
import { UpdateAddressDto } from '../dto/update_address.dto';

@Injectable()
export class UhidProfileRepository {
    async getAllProfile(
        limitNum: number,
        offsetNum: number,
        profileId: number,
        mobileNumber: string,
    ) {
        const users = await UhidProfile.findAndCountAll({
            where: mobileNumber
                ? {
                      mobilenumber: mobileNumber,
                  }
                : {},
            raw: true,
            paranoid: true,
            limit: limitNum,
            offset: offsetNum,
            attributes: { exclude: ['created_at', 'updated_at'] },
        });

        const newUsers = users.rows.map((val: any) => {
            const newDate = val.dob ? this.convertToDateFormat(val.dob) : null;
            return {
                ...val,
                dob: newDate,
            };
        });

        const uniqueCount = newUsers.length;
        return {
            data: {
                count: uniqueCount,
                rows: newUsers,
            },
        };
    }

    async getAllProfileByMobileNumber(mobileNumber: any) {
        return UhidProfile.findAll({
            where: {
                mobilenumber: mobileNumber,
            },
        });
    }

    async getProfileById(id: number) {
        const profile = await UhidProfile.findOne({
            where: { profileId: id },
            attributes: { exclude: ['created_at', 'updated_at'] },
            raw: true,
        });

        if (!profile) {
            throw new HttpExceptionWrapper(
                UHID_PROFILE_ERROR.PROFILE_NOT_FOUND,
            );
        }

        return profile;
    }

    async createUser(obj: CreateUserDto) {
        const {
            userId,
            title,
            access_token,
            uhid,
            firstname,
            lastname,
            email,
            dob,
            age,
            gender,
            mobilenumber,
            relationship,
            address,
            defaultUser,
            alternatemobile,
        } = obj;

        const userObj = {
            userId,
            title,
            access_token,
            uhid,
            firstname,
            lastname,
            email,
            dob,
            age,
            gender,
            mobilenumber,
            relationship,
            address,
            defaultUser,
            alternatemobile,
        };

        const user = await UhidProfile.create(userObj);

        return {
            user: user,
        };
    }

    async UpdateUser(id: number, obj: UpdateUserDto) {
        const updateUser = await UhidProfile.findOne({
            where: { profileId: id },
        });
        if (!updateUser)
            throw new HttpExceptionWrapper(
                UHID_PROFILE_ERROR.PROFILE_NOT_FOUND,
            );

        await updateUser.update(obj);
    }

    async createAddress(obj: CreateAddressDto) {
        return await Address.create(obj);
    }

    async getAllAddress(info: GetAddressDto, mobileNumber: string) {
        return await Address.findAndCountAll({
            where: {
                mobile: mobileNumber,
            },
            limit: info.limit,
            offset: info.offset,
        });
    }

    async deleteAddress(id: number) {
        try {
            const address = await Address.findOne({
                where: { address_id: id },
            });

            if (!address) {
                throw new HttpExceptionWrapper(
                    UHID_PROFILE_ERROR.ADDRESS_NOT_FOUND,
                );
            }

            await Address.destroy({ where: { address_id: id } });
        } catch (error) {
            if (error.name === 'SequelizeForeignKeyConstraintError') {
                throw new HttpExceptionWrapper(
                    UHID_PROFILE_ERROR.ADDRESS_DELETION_FAILED,
                );
            }
            throw error;
        }
    }

    async deleteProfile(id: number) {
        return await UhidProfile.destroy({
            where: {
                profileId: id,
            },
        });
    }

    async updateAddress(id: number, obj: UpdateAddressDto) {
        const address = await Address.findOne({ where: { address_id: id } });
        if (!address) {
            throw new HttpExceptionWrapper(
                UHID_PROFILE_ERROR.ADDRESS_NOT_FOUND,
            );
        }

        return (await address.update(obj)).dataValues;
    }
    async getAllAddressByMobileNumber(mobileNumber: any) {
        return await Address.findAll({
            where: {
                mobile: mobileNumber,
            },
        });
    }

    convertToDateFormat(dateString: any) {
        // Check if the date is in yyyy-mm-dd format
        if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
            return dateString; // Return as is
        }

        // Check if the date is in yyyy/mm/dd format and convert it to yyyy-mm-dd
        if (/^\d{4}\/\d{2}\/\d{2}$/.test(dateString)) {
            return dateString.replace(/\//g, '-'); // Convert slashes to dashes
        }

        // Check if the date is in the format "Thu Aug 07 00:00:00 IST 1986"
        if (
            /[a-zA-Z]{3} [a-zA-Z]{3} \d{2} \d{2}:\d{2}:\d{2} [A-Z]{3} \d{4}/.test(
                dateString,
            )
        ) {
            const months: any = {
                Jan: '01',
                Feb: '02',
                Mar: '03',
                Apr: '04',
                May: '05',
                Jun: '06',
                Jul: '07',
                Aug: '08',
                Sep: '09',
                Oct: '10',
                Nov: '11',
                Dec: '12',
            };
            const parts = dateString.split(' ');
            const year = parts[5];
            const month = months[parts[1]];
            const day = parts[2].padStart(2, '0'); // Ensure day is 2 digits
            return `${year}-${month}-${day}`;
        }

        // Check if the date is in dd/mm/yy format
        if (/^\d{2}\/\d{2}\/\d{2}$/.test(dateString)) {
            const [day, month, year] = dateString.split('/');
            const fullYear = `20${year}`; // Assume 20xx for yy (adjust based on your needs)
            return `${fullYear}-${month}-${day}`;
        }

        // Check if the date is in dd-mm-yy format
        if (/^\d{2}-\d{2}-\d{2}$/.test(dateString)) {
            const [day, month, year] = dateString.split('-');
            const fullYear = `20${year}`; // Assume 20xx for yy (adjust based on your needs)
            return `${fullYear}-${month}-${day}`;
        }

        return dateString;
    }
}
