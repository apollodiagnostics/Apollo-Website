import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class VerifyOtpBodyDto {
    @IsString()
    @IsNotEmpty()
    @Matches(/^\d{10}$/, {
        message:
            'Please enter valid phone number. A valid phone number must have 10 digits in it',
    })
    mobileNumber: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^\d{6}$/, {
        message: 'Please enter valid otp. A valid otp must have 6 digits in it',
    })
    otp: string;
}

export class VerifyOtpHeaderDto {
    @IsString()
    @IsNotEmpty()
    authorization: string;
}
