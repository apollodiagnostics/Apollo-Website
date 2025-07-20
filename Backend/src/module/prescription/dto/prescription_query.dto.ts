import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class QueryDto {
    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    limit?: number = 1000;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    offset?: number = 0;
}
