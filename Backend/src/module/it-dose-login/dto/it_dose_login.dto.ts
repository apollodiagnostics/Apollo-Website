import { IsNotEmpty, IsString } from 'class-validator';

export class ItDoseDto {
    @IsString()
    @IsNotEmpty()
    Username: string;

    @IsString()
    @IsNotEmpty()
    Password: string;

    @IsString()
    @IsNotEmpty()
    Client: string;
}
