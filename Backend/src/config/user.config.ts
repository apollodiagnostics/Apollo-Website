import { registerAs } from '@nestjs/config';

export default registerAs(
    'redis',
    (): Record<string, string | number | boolean | object> => ({
        port: process.env.PORT || 6379,
        secret: process.env.SECRET || '',
        username: process.env.USERNAME || '',
    }),
);
