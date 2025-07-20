import { HttpStatus } from '@nestjs/common';

export interface IResponseStatusMessage {
    statusCode: HttpStatus;
    message: string;
}
