import { Type } from 'class-transformer';
import {
    IsArray,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested,
} from 'class-validator';
import { PatientInfoDto } from './initiate_payment.dto';

export class CouponValidationRequestDto {
    @IsOptional()
    @IsString()
    Client?: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CouponDto)
    Coupons: CouponDto[];

    @IsString()
    MobileNo: string;

    @IsOptional()
    @IsString()
    GrossAmount?: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PatientInfoDto)
    patientInfo: PatientInfoDto[];
}

export class CouponDto {
    @IsString()
    CouponCode: string;
}

export class TestsDto {
    @IsString()
    ItemID: string;

    @IsString()
    ItemName: string;

    @IsNumber()
    Rate: number;
}

export class CouponDataEssentialsDto {
    mobileNumber: string;
    patientName: string;
    tests: TestsDto[];
    grossAmount?: number;
}

// export class CouponDataDto {
//     UniqueID: string;
//     CouponCode: string;
//     ItemID: string;
//     Rate: number;
//     DiscAmt: number;
// }
