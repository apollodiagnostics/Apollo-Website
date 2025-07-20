import { IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class BannerDto {
    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    limit: number = 10;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    offset: number = 0;
}
