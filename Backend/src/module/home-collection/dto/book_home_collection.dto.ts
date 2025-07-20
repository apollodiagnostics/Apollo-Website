import { IsNotEmpty, IsString } from 'class-validator';

export class BookHomeCollectionDto {
    @IsString()
    @IsNotEmpty()
    HomeCollectionData: string;

    @IsString()
    @IsNotEmpty()
    HomeCollectionChargeData: string;
}
