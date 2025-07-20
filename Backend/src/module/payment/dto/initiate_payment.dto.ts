import {
    IsNotEmpty,
    IsNumber,
    IsString,
    ValidateNested,
    IsArray,
    IsOptional,
    IsEnum,
    IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PAYMENT_TYPE } from '../constants/payment.constants';
import { CouponDto } from './coupon_data.dto';

export class TestDetailsDto {
    @IsNotEmpty()
    @IsNumber()
    itemId: number;

    @IsOptional()
    @IsString()
    itemName: string;

    @IsNotEmpty()
    @IsNumber()
    cityId: number;

    @IsOptional()
    @IsNumber()
    discAmt?: number;
}

export class PatientInfoDto {
    @IsNotEmpty()
    @IsNumber()
    patientId: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestDetailsDto)
    testDetails: TestDetailsDto[];
}

export class InitiatePaymentDto {
    @IsNotEmpty()
    @IsNumber()
    hcRedeem: number;

    @IsNotEmpty()
    @IsNumber()
    homeCollectionCharges: number;

    @IsNotEmpty()
    @IsNumber()
    addressId: number;

    @IsOptional()
    @IsString()
    productInfo: string;

    @IsNotEmpty()
    @IsString()
    appointmentTime: string;

    @IsNotEmpty()
    @IsEnum(PAYMENT_TYPE, { message: 'Payment type must be ONLINE or COD' })
    payment_type: PAYMENT_TYPE;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PatientInfoDto)
    patientInfo: PatientInfoDto[];

    @IsOptional()
    @IsNumber()
    totalDiscAmt: number;

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CouponDto)
    couponData?: CouponDto[];

    @IsOptional()
    @IsString()
    couponCode: string;

    @IsOptional()
    @IsUUID(4)
    uniqueId: string;
}
