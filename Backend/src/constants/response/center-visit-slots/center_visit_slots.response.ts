import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const centerVisitSlotsResponseName = {
    ALL_SLOTS_FETCHED: 'ALL_SLOTS_FETCHED',
    SLOT_FETCHED: 'SLOT_FETCHED',
};

export const centerVisitSlotsResponseInfo: Record<
    string,
    IResponseStatusMessage
> = {
    ALL_SLOTS_FETCHED: {
        message: 'ALL center visit slots fetched successfully',
        statusCode: HttpStatus.OK,
    },

    SLOT_FETCHED: {
        message: 'Center slot fetched successfully',
        statusCode: HttpStatus.OK,
    },
};
