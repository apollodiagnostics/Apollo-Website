import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class TestDTO {
    @IsString()
    @IsOptional()
    name?: string;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    id?: number;

    @IsOptional()
    @IsNumber()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    city_id?: number;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    limit?: number = 1000;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    offset?: number = 0;
}
