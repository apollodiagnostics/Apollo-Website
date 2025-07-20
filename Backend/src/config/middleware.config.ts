import { registerAs } from '@nestjs/config';
import { REQUEST_METHOD } from 'src/enum/common';

export default registerAs(
    'middleware',
    (): Record<string, string | number | boolean | object> => ({
        cors: {
            allowMethod: [
                REQUEST_METHOD.GET,
                REQUEST_METHOD.DELETE,
                REQUEST_METHOD.PUT,
                REQUEST_METHOD.PATCH,
                REQUEST_METHOD.POST,
                REQUEST_METHOD.OPTIONS,
            ],
            allowOrigin:
                (process?.env?.CORS_ALLOW_ORIGIN as string)?.split(',') ?? '*',
            // allowOrigin: [/example\.com(\:\d{1,4})?$/], // allow all subdomain, and all port
            // allowOrigin: [/example\.com$/], // allow only subdomain
            allowHeader: [
                'Accept',
                'Accept-Language',
                'Content-Language',
                'Content-Type',
                'Origin',
                'Authorization',
                'Referer',
                'Host',
                'x-timestamp',
                'x-api-key',
                'x-timezone',
                'x-request-id',
                'X-Response-Time',
                'user-agent',
                'Access-Control-Request-Method',
                'Access-Control-Request-Headers',
                'Access-Control-Allow-Headers',
                'Access-Control-Allow-Origin',
                'Access-Control-Allow-Methods',
                'Access-Control-Allow-Credentials',
                'Access-Control-Expose-Headers',
                'Access-Control-Max-Age',
                'x-role-type',
                'x-user-location',
                'apikey',
                'accesstoken',
                'x-apollo247-apigee-api-key',
                'X-Frame-Options',
                'X-Content-Type-Options',
                'Content-Security-Policy',
                'X-XSS-Protection',
            ],
            exposedHeaders: [
                'x-access-token',
                'x-refresh-token',
                'x-role-type',
                'x-user-location',
            ],
        },
    }),
);
