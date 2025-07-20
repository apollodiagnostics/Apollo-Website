import { IsNotEmpty, IsString } from 'class-validator';

export class SendOtpHeaderDto {
    @IsString()
    @IsNotEmpty()
    APIKey: string;

    @IsString()
    @IsNotEmpty()
    AccessToken: string;

    @IsString()
    @IsNotEmpty()
    'Content-Type': string;

    @IsString()
    @IsNotEmpty()
    'x-apollo247-apigee-api-key': string;
}
