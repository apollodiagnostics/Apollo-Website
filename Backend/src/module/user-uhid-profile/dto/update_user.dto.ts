import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Matches,
} from 'class-validator';
import { DEFAULT_ADDRESS, GENDER } from '../constants/uhid_profile.constants';

export class UpdateUserDto {
    @IsNumber()
    @IsOptional()
    userId?: number;

    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    access_token?: string;

    @IsString()
    @IsOptional()
    uhid?: string;

    @IsString()
    @IsNotEmpty()
    firstname: string;

    @IsString()
    @IsOptional()
    lastname?: string = '';

    @IsEmail()
    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    dob?: string;

    @IsString()
    @IsOptional()
    age?: string;

    @IsString()
    @IsOptional()
    @IsEnum(GENDER)
    gender?: GENDER;

    @IsString()
    @IsOptional()
    @Matches(/^\d{10}$/, {
        message:
            'Please enter valid phone number. A valid phone number must have 10 digits in it',
    })
    mobilenumber?: string;

    @IsString()
    @IsOptional()
    relationship?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsNumber()
    @IsOptional()
    defaultUser?: number;

    @IsString()
    @IsOptional()
    alternatemobile?: string;

    @IsString()
    @IsOptional()
    state?: string;

    @IsString()
    @IsOptional()
    country?: string;

    @IsString()
    @IsOptional()
    city?: string;

    @IsString()
    @IsOptional()
    pincode?: string;

    @IsString()
    @IsOptional()
    type?: string = '';

    @IsString()
    @IsOptional()
    countryName?: string;

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
