import { IsNotEmpty, IsString } from 'class-validator';

export class DownloadReportBodyDto {
    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
export class DownloadReportHeaderDto {
    @IsString()
    @IsNotEmpty()
    authorization: string;
}
