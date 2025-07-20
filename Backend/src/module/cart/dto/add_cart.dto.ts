import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Matches,
    ValidateNested,
} from 'class-validator';
import { ItemListDto } from './item_list.dto';
import { Type } from 'class-transformer';

export class CardDto {
    @IsNotEmpty()
    @IsString()
    @Matches(/^\d{10}$/, {
        message:
            'Please enter valid phone number. A valid phone number must have 10 digits in it',
    })
    mobile_number: string;

    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => ItemListDto)
    item_list: ItemListDto[];

    @IsOptional()
    @IsNumber()
    item_quantity?: number = 1;
}
