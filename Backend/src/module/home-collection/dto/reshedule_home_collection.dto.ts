import {
    IsArray,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Matches,
} from 'class-validator';

export class RescheduleDto {
    @IsString()
    @IsNotEmpty()
    client: string;

    @IsNumber()
    @IsNotEmpty()
    preBookingId: number;

    @IsString()
    @IsOptional()
    preBookingIdDigital?: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/\d{2}-[A-Za-z]{3}-\d{4} \d{2}:\d{2}/, {
        message: 'Please enter date in this format 08-Aug-2024 04:30',
    })
    newAppDate: string;

    @IsArray()
    @IsString({ each: true })
    //@Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]\s?(AM|PM)$/i, { each: true, message: 'Invalid time format' })
    slotTime: string[];
}
