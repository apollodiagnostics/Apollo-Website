import { registerAs } from '@nestjs/config';

export default registerAs(
    'payu',
    (): Record<string, string | number | boolean | object> => ({
        key: process.env.PAYU_KEY || '',
        salt: process.env.PAYU_SALT || '',
        redirectLink: process.env.PAYU_REDIRECT_LINK || '',
    }),
);
