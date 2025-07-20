import { registerAs } from '@nestjs/config';

export default registerAs(
    'itdose',
    (): Record<string, string | number | boolean | object> => ({
        apolloDiagonisticsUrl: process.env.APOLLO_DIAGONISTICS_URL || '',
        apolloHlUrl: process.env.APOLLO_HL_URL || '',
        hcApolloDiagonisticsUrl: process.env.HC_APOLLO_DIAGONISTICS_URL || '',
        itdoseUserName: process.env.IT_DOSE_LOGIN_USERNAME || '',
        itdosePassword: process.env.IT_DOSE_LOGIN_PASSWORD || '',
        itdoseClient: process.env.IT_DOSE_LOGIN_CLIENT || '',
        apolloBaseUrl: process.env.APOLLO_BASE_URL || '',
        apolloFrontendUrl: process.env.APOLLO_FRONTEND_URL || '',
        hcCreditApiKey: process.env.HC_CREDIT_APIKEY || '',
        hcCreditAccessToken: process.env.HC_CREDIT_ACCESS_TOKEN || '',
        hcCreditContentType: process.env.HC_CREDIT_CONTENT_TYPE || '',
        hcCreditXApollo247ApigeeApiKey:
            process.env.HC_CREDIT_X_APOLLO247_APIGEE_API_KEY || '',
    }),
);
