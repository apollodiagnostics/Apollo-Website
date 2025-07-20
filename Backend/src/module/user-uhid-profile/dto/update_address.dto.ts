import {
    IsEnum,
    IsNumber,
    IsOptional,
    IsString,
    Matches,
} from 'class-validator';
import { DEFAULT_ADDRESS, GENDER } from '../constants/uhid_profile.constants';

export class UpdateAddressDto {
    @IsOptional()
    profileId?: number;

    @IsString()
    @IsOptional()
    access_token?: string;

    @IsString()
    @IsOptional()
    uhid?: string;

    @IsString()
    @IsOptional()
    firstname?: string = '';

    @IsString()
    @IsOptional()
    lastname?: string = '';

    @IsString()
    @IsOptional()
    @Matches(/^\d{10}$/, {
        message:
            'Please enter valid phone number. A valid phone number must have 10 digits in it',
    })
    mobile?: string;

    @IsString()
    @IsOptional()
    state?: string;

    @IsString()
    @IsOptional()
    country?: string = '82';

    @IsString()
    @IsOptional()
    city: string;

    @IsString()
    @IsOptional()
    pincode?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    type?: string;

    @IsString()
    @IsOptional()
    countryName?: string = 'India';

    @IsString()
    @IsOptional()
    stateName?: string;

    @IsString()
    @IsOptional()
    cityName?: string;

    @IsNumber()
    @IsOptional()
    areaId?: number;

    @IsString()
    @IsOptional()
    areaName?: string;

    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    age?: string;

    @IsString()
    @IsOptional()
    @IsEnum(GENDER)
    gender?: GENDER;

    @IsString()
    @IsOptional()
    dateofbirth?: string;

    @IsEnum(DEFAULT_ADDRESS)
    @IsOptional()
    defaultAddress?: DEFAULT_ADDRESS;

    @IsString()
    @IsOptional()
    lat?: string;

    @IsString()
    @IsOptional()
    lng?: string;

    @IsString()
    @IsOptional()
    street?: string;

    @IsString()
    @IsOptional()
    landmark?: string;

    @IsString()
    @IsOptional()
    existance?: string;
}
