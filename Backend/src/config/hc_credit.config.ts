import { registerAs } from '@nestjs/config';

export default registerAs(
    'hcCredit',
    (): Record<string, string | number | boolean | object> => ({
        hcCreditUrl: process.env.HC_CREDIT_URL || '',
        hcCreditApiKey: process.env.HC_CREDIT_APIKEY || '',
        hcCreditAccessToken: process.env.HC_CREDIT_ACCESS_TOKEN || '',
        hcCreditContentType: process.env.HC_CREDIT_CONTENT_TYPE || '',
        hcCreditXApollo247ApigeeApiKey:
            process.env.HC_CREDIT_X_APOLLO247_APIGEE_API_KEY || '',
    }),
);
