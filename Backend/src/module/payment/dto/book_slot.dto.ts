import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class BookSlotDto {
    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    clientBookingId: string;

    @IsOptional()
    @IsString()
    txnNumber?: string;

    @IsOptional()
    @IsString()
    paymentMode?: string;

    @IsOptional()
    @IsString()
    deviceId?: string;

    @IsNotEmpty()
    @IsString()
    sessionId: string;

    @IsNotEmpty()
    @IsString()
    preBookingId: string;

    @IsOptional()
    @IsString()
    otherInfo?: string;
}
