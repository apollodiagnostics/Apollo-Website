import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ITEM_TYPE } from '../constants/item.constants';
import { CommaSeparatedToArray } from 'src/utils/custom-class-transformer';

export class ItemQueryDto {
    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    cityId?: number;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    itemId?: number;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    limit?: number = 1000;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    offset?: number = 0;

    @IsOptional()
    @CommaSeparatedToArray({ isNumber: true })
    @Transform(({ value }) => value.map((val: string) => parseInt(val, 10)), {
        toClassOnly: true,
    })
    popularCategoryId?: number[];

    @IsOptional()
    @CommaSeparatedToArray({ isNumber: true })
    @Transform(({ value }) => value.map((val: string) => parseInt(val, 10)), {
        toClassOnly: true,
    })
    conditionId?: number[];

    @IsString()
    @IsOptional()
    search?: string;

    @IsString()
    @IsOptional()
    cityName?: string;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsOptional()
    @CommaSeparatedToArray({ isNumber: false }) // Keep the values as strings
    @Transform(({ value }) => value.map((val: string) => val), {
        toClassOnly: true,
    })
    conditionName?: string[];

    @IsEnum(ITEM_TYPE)
    @IsOptional()
    type?: ITEM_TYPE;
}
