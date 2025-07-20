import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class GoogleDto {
    @IsOptional()
    @IsNumber()
    @Transform(({ value }) => parseInt(value))
    id?: number;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    limit?: number = 1000;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    offset?: number = 0;
}
