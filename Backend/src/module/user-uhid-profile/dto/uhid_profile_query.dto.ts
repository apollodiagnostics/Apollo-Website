import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UhidQueryDto {
    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    limit?: number = 1000;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    offset?: number = 0;

    @IsString()
    @IsOptional()
    mobileNumber?: string;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    profileId?: number;
}
