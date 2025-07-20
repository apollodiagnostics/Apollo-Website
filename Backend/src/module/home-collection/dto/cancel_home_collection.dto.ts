import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CancelHomeCollectionDto {
    @IsString()
    @IsNotEmpty()
    client: string;

    @IsNumber()
    @IsNotEmpty()
    preBookingId: number;

    @IsString()
    @IsNotEmpty()
    cancelRemarks: string;

    @IsNumber()
    @IsNotEmpty()
    cancelAllUhids: number;

    @IsString()
    @IsOptional()
    preBookingIdDigital?: string;
}
