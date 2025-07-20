import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ArticleDto {
    @IsOptional()
    @IsNumber()
    @Transform(({ value }) => parseInt(value))
    id?: number;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    limit?: number = 1000;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    offset?: number = 0;
}
