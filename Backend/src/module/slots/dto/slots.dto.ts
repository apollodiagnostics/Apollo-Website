import {
    IsDate,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    Matches,
    IsEmail,
} from 'class-validator';
import { STATUS } from '../constants/slots.constants';

export class SlotsDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^\d{10}$/, {
        message:
            'Please enter valid phone number. A valid phone number must have 10 digits in it',
    })
    mobile_number: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    lab_center: string;

    @IsString()
    @Matches(/^\d{4}-\d{2}-\d{2}$/)
    @IsNotEmpty()
    booked_date: string;

    @IsString()
    @IsOptional()
    slot_time?: string;

    @IsString()
    @IsNotEmpty()
    test_name: string;

    @IsString()
    @IsOptional()
    prescription?: string = '';

    @IsDate()
    @IsOptional()
    created_at?: Date;

    @IsDate()
    @IsOptional()
    updated_at?: Date;

    @IsOptional()
    @IsEnum(STATUS)
    status?: STATUS;
}
