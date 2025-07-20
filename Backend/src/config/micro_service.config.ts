import { registerAs } from '@nestjs/config';

export default registerAs(
    'microService',
    (): Record<string, string | number | boolean | object> => ({
        limsApolloDiagnostics: {
            url: process.env.LIMS_APOLLO_DIAGONISTICS_URL || '',
            username: process.env.LIMS_APOLLO_DIAGONISTICS_USER_NAME || '',
            password: process.env.LIMS_APOLLO_DIAGONISTICS_PASSWORD || '',
            client: process.env.LIMS_APOLLO_DIAGONISTICS_CLIENT || '',
        },
        limsApolloHl: {
            url: process.env.HC_APOLLO_DIAGONISTICS_URL || '',
            username: process.env.HC_APOLLO_DIAGONISTICS_USERNAME || '',
            password: process.env.HC_APOLLO_DIAGONISTICS_PASSWORD || '',
            client: process.env.HC_APOLLO_DIAGONISTICS_CLIENT || '',
        },
        apolloProxyGate: {
            url: process.env.APOLLO_PROXYGATE_URL || '',
            apiKey: process.env.APOLLO_PROXYGATE_APIKEY || '',
            accessToken: process.env.APOLLO_PROXYGATE_ACCESS_TOKEN || '',
            contentType: process.env.APOLLO_PROXYGATE_CONTENT_TYPE || '',
            apigeeApiKey:
                process.env.APOLLO_PROXYGATE_X_APOLLO247_APIGEE_API_KEY || '',
        },
        hcApolloDiagnostics: {
            url: process.env.HC_APOLLO_DIAGONISTICS_URL || '',
            username: process.env.HC_APOLLO_DIAGONISTICS_USERNAME || '',
            password: process.env.HC_APOLLO_DIAGONISTICS_PASSWORD || '',
            client: process.env.HC_APOLLO_DIAGONISTICS_CLIENT || '',
        },
        apolloDynamicRoaster: {
            url: process.env.APOLLO_DYNAMIC_ROASTER_URL || '',
            username: process.env.APOLLO_DYNAMIC_ROASTER_USER_NAME || '',
            password: 'AploDiagno@12#$3!2',
            grantType: process.env.APOLLO_DYNAMIC_ROASTER_GRANT_TYPE || '',
            source: process.env.APOLLO_DYNAMIC_ROASTER_SOURCE || '',
        },
        uatLimsHl: {
            url: process.env.LIMS_APOLLO_HL_URL || '',
            username: process.env.LIMS_APOLLO_HL_USER_NAME || '',
            password: process.env.LIMS_APOLLO_HL_PASSWORD || '',
            client: process.env.LIMS_APOLLO_HL_CLIENT || '',
        },
    }),
);
