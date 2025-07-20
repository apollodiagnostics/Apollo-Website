import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class GetAddressDto {
    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    profileId?: number;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    limit?: number;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    offset?: number;
}
