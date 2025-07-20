import { Transform } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class ItemInclusionQueryDto {
    @IsNotEmpty({ message: 'ItemIDList should not be empty' })
    @Transform(({ value }) => {
        if (typeof value === 'string') {
            return value.split(',').map((val: string) => Number(val.trim()));
        }

        return value;
    })
    @IsArray({ message: 'ItemIDList must be an array' })
    @IsNumber({}, { each: true, message: 'Each ItemID must be a number' })
    ItemIDList: number[];
}
