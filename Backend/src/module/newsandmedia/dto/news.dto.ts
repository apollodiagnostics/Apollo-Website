import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class NewsAndMediaDto {
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

export class NewsAndMediaByIdDto {
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    id: number;
}
