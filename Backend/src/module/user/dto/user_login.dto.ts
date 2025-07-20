import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class UserDto {
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
        message:
            'Please enter valid otp . A valid otp number must have 6 digits in it',
    })
    otp: string;
}
