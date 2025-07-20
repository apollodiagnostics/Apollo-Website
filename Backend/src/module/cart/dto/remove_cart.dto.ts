import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RemoveCartDto {
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => parseInt(value))
    itemId: number;

    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => parseInt(value))
    cityId: number;

    @IsNotEmpty()
    @IsString()
    mobileNumber: number;

    @IsNotEmpty()
    @IsString()
    labId: number;
}
