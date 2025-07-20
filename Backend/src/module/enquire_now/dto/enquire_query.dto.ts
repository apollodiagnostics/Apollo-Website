import { Transform } from 'class-transformer';
import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    IsEmail,
} from 'class-validator';

export class ItemQueryDto {
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    lastname?: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @IsNotEmpty()
    @IsString()
    gender: string;

    @IsNotEmpty()
    @IsString()
    dob: string;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsString()
    city: string;
}
