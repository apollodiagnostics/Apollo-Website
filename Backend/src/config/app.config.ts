import { registerAs } from '@nestjs/config';
import ms = require('ms');

export default registerAs(
    'app',
    (): Record<string, string | number | boolean | object> => ({
        env: process.env.APP_ENV || 'development',
        http: {
            host: process.env.APP_HOST || 'localhost',
            port: process.env.APP_PORT || 3000,
            appUrl: process.env.APP_URL || '',
        },
        versioning: {
            on: process.env.APP_VERSIONING === 'true' || true,
            prefix: 'v',
        },
        globalPrefix: 'api',
        debug: process.env.APP_DEBUG === 'true' || true,
        debugger: {
            http: {
                maxFiles: 5,
                maxSize: '2M',
            },
            system: {
                maxFiles: ms('7d'),
                maxSize: '2m',
            },
        },
        throttle: {
            ttl: process.env.API_THROTTLE_TTL ?? 60,
            limit: process.env.API_THROTTLE_LIMIT ?? 1000,
        },
    }),
);
