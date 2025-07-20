import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class BlogQueryDto {
    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    category?: number;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    limit?: number = 1000;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    offset?: number = 0;
}
