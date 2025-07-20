import { IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class QueryDto {
    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    limit?: number = 5;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    offset?: number = 0;
}
