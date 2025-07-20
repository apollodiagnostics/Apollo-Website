import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const slotsResponseName = {
    SLOTS_BOOKED: 'SLOT_BOOKED',
};

export const slotsResponseInfo: Record<string, IResponseStatusMessage> = {
    SLOTS_BOOKED: {
        message: 'Slot booked successfully',
        statusCode: HttpStatus.OK,
    },
};
