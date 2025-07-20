import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CommaSeparatedToArray } from 'src/utils/custom-class-transformer';

export class CreatePaymentDto {
    @IsNumber()
    @IsNotEmpty()
    profileId: number;

    @IsNotEmpty()
    @CommaSeparatedToArray({ isNumber: true })
    @Transform(({ value }) => value.map((val: string) => parseInt(val, 10)), {
        toClassOnly: true,
    })
    itemId?: number[];

    @IsString()
    @IsNotEmpty()
    productInfo: string;
}
