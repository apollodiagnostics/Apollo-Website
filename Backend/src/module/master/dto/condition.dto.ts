import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ConditionDto {
    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    cityId?: number;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    stateId?: number;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    limit?: number = 1000;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    offset?: number = 0;
}
