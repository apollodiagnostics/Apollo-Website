import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CategoryDto {
    @IsOptional()
    @IsNumber()
    @Transform(({ value }) => parseInt(value))
    cityId?: number;

    @IsOptional()
    @IsString()
    categoryType?: string;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    limit?: number = 1000;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    offset?: number = 0;
}
