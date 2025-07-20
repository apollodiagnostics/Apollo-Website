import { IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';

export class SendOtpBodyDto {
    @IsString()
    @IsNotEmpty()
    businessUnit: string;

    @IsString()
    @IsNotEmpty()
    storeCode: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^\d{10}$/, {
        message:
            'Please enter valid phone number. A valid phone number must have 10 digits in it',
    })
    mobileNumber: string;

    @IsNumber()
    @IsNotEmpty()
    creditsRedeemed: number;

    @IsString()
    @IsNotEmpty()
    orderId: string;
}
