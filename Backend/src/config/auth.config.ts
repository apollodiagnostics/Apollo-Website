import { registerAs } from '@nestjs/config';

export default registerAs(
    'auth',
    (): Record<string, string | number | boolean | object> => ({
        JwtSecretKey: process.env.SECRET_KEY || '',
        JwtExpireIn: process.env.JWT_EXPIRE_IN || '',
    }),
);
