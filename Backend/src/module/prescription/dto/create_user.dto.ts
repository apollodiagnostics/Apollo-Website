import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNumber()
    @IsNotEmpty()
    profileId: number;

    @IsString()
    @IsOptional()
    image_url?: string = '';
}
