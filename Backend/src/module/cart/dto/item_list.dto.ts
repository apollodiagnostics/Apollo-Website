import { IsNotEmpty, IsNumber } from 'class-validator';

export class ItemListDto {
    @IsNotEmpty()
    @IsNumber()
    item_id: number;

    @IsNotEmpty()
    @IsNumber()
    city_id: number;
}
