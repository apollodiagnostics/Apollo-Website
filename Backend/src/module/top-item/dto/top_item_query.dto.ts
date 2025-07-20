import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ITEM_TYPE } from '../constants/top_item.constants';
export class ItemQueryDto {
    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    cityId?: number;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    itemId?: number;

    @IsString()
    @IsOptional()
    search?: string;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    limit?: number = 1000;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    offset?: number = 0;

    @IsEnum(ITEM_TYPE)
    @IsOptional()
    type?: ITEM_TYPE;
}
