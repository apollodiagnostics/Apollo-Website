import {
    IsString,
    IsArray,
    IsNotEmpty,
    IsNumber,
    ValidateNested,
    Matches,
} from 'class-validator';
import { Type } from 'class-transformer';

export class SlotPatientDetailsDTO {
    @IsString()
    @IsNotEmpty()
    patientName: string;

    @IsString()
    @IsNotEmpty()
    uhid: string;
}

export class SlotDTO {
    @IsString()
    @IsNotEmpty()
    time: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SlotPatientDetailsDTO)
    patientDetails: SlotPatientDetailsDTO[];
}

export class BlockSlotDto {
    @IsString()
    @IsNotEmpty()
    lat: string;

    @IsString()
    @IsNotEmpty()
    lng: string;

    @IsNumber()
    minMaxRadius: number;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    sessionId: string;

    @IsString()
    @IsNotEmpty()
    slotDate: string;

    @IsString()
    @IsNotEmpty()
    deviceId: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^\d{10}$/, {
        message:
            'Please enter valid phone number. A valid phone number must have 10 digits in it',
    })
    mobile: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SlotDTO)
    slots: SlotDTO[];
}
