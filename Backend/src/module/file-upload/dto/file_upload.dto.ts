import { IsNotEmpty, IsString } from 'class-validator';

import { IsNonEmptyStringArray } from 'src/shared';
import CommaSeparatedToArray from 'src/shared/class-transformer/comma_separated_to_array';

export class UpdateFileDto {
    @IsNotEmpty()
    @IsString()
    key: string;
}

export class FilesDto {
    @CommaSeparatedToArray()
    @IsNonEmptyStringArray(1, process.env.KEY_PREFIX)
    keys?: string[];
}
