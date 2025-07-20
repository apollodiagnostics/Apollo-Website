import { IsNotEmpty, IsString } from 'class-validator';

export class GetTokenDto {
    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    client: string;
}
