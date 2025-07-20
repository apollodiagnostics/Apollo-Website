import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class validateOtpBodyDto {
    @IsString()
    @IsNotEmpty()
    requestNumber: string;

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

    @IsString()
    @IsNotEmpty()
    otp: string;
}
