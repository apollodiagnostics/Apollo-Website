import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CenterQueryDto {
    @IsOptional()
    @IsNumber()
    @Transform(({ value }) => parseInt(value))
    state?: number;

    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsString()
    slug?: string;

    @IsOptional()
    @IsNumber()
    @Transform(({ value }) => parseInt(value))
    city?: number;

    @IsOptional()
    @IsString()
    locality?: string;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    limit?: number = 1000;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    offset?: number = 0;
}
