import {
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Matches,
} from 'class-validator';
import { DEFAULT_ADDRESS, GENDER } from '../constants/uhid_profile.constants';

export class CreateAddressDto {
    @IsOptional()
    @IsNumber()
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
    @IsNotEmpty()
    @Matches(/^\d{10}$/, {
        message:
            'Please enter valid phone number. A valid phone number must have 10 digits in it',
    })
    mobile: string;

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
    @IsNotEmpty()
    pincode: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsOptional()
    countryName?: string = 'India';

    @IsString()
    @IsNotEmpty()
    stateName: string;

    @IsString()
    @IsNotEmpty()
    cityName: string;

    @IsNumber()
    @IsOptional()
    areaId?: number;

    @IsString()
    @IsNotEmpty()
    areaName: string;

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
