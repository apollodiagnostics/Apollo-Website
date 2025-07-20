import { HttpStatus } from '@nestjs/common';
import { IResponseStatusMessage } from 'src/utils/response/response.interface';

export const faqResponseName = {
    FAQ_FETCHED: 'FAQ_FETCHED',
    ALL_FAQS_FETCHED: 'ALL_FAQS_FETCHED',
};

export const faqResponseInfo: Record<string, IResponseStatusMessage> = {
    FAQ_FETCHED: {
        message: 'Faq fetched successfully',
        statusCode: HttpStatus.OK,
    },

    ALL_FAQS_FETCHED: {
        message: 'All faqs fetched successfully',
        statusCode: HttpStatus.OK,
    },
};
