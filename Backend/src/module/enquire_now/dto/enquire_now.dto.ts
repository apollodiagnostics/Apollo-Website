import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    IsEmail,
    IsDateString,
    Matches,
    IsEnum,
} from 'class-validator';

import { GENDER } from '../constants/enquire_now.constants';
export class EnquireDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    lastname?: string;

    @IsEmail()
    @IsOptional()
    @IsString()
    email?: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^\d{10}$/, {
        message:
            'Please enter valid phone number. A valid phone number must have 10 digits in it',
    })
    mobile_number: string;

    @IsOptional()
    @IsEnum(GENDER)
    gender?: GENDER;

    @IsOptional()
    @IsDateString({ strict: true })
    dob?: Date;

    @IsOptional()
    @IsString()
    state?: string;

    @IsOptional()
    @IsString()
    city?: string;

    @IsOptional()
    @IsString()
    locality?: string;

    @IsOptional()
    @IsDateString({ strict: true })
    prefered_date?: Date;

    @IsOptional()
    @IsString()
    @Matches(/^([0-1]?\d|2[0-3]):[0-5]\d$/, {
        message: 'Slot time should be valid',
    })
    slot_time?: string;

    @IsNumber()
    @IsOptional()
    price?: number;

    @IsNumber()
    @IsOptional()
    state_id?: number;

    @IsNumber()
    @IsOptional()
    city_id?: number;

    @IsNumber()
    @IsOptional()
    areaid?: number;

    @IsNumber()
    @IsOptional()
    pin_code?: number;

    @IsOptional()
    @IsString()
    test_name?: string;

    @IsString()
    @IsOptional()
    comment?: string = '';

    @IsNumber()
    @IsOptional()
    status?: number;

    @IsString()
    @IsOptional()
    prescription?: string;

    @IsDateString()
    @IsOptional()
    created_at?: Date;

    @IsDateString()
    @IsOptional()
    updated_at?: Date;

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsString()
    customer_address?: string;

    @IsString()
    @IsOptional()
    lat?: string;

    @IsString()
    @IsOptional()
    lang?: string;
}
