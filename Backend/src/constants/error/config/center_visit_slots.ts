import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { CENTER_VISIT_SLOTS_ERROR } from '../errors/center_visit_slots';

export const CENTER_VISIT_SLOTS_ERROR_CONFIG: ErrorConfig<CENTER_VISIT_SLOTS_ERROR> =
    {
        [CENTER_VISIT_SLOTS_ERROR.DATA_NOT_FOUND]: {
            message: 'Center visit slots not found',
            statusCode: HttpStatus.NOT_FOUND,
            errorCode: 'CENTER_VISIT_SLOTS_NOT_FOUND_ERROR',
        },
    };
