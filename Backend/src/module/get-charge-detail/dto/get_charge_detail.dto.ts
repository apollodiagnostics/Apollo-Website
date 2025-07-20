import { IsNotEmpty, IsString } from 'class-validator';

export class GetChargeDetailDto {
    @IsString()
    @IsNotEmpty()
    ItemID: string;

    @IsString()
    @IsNotEmpty()
    TotalBillAmount: string;

    @IsString()
    @IsNotEmpty()
    StateId: string;

    @IsString()
    @IsNotEmpty()
    minMaxRadius: string;
}
