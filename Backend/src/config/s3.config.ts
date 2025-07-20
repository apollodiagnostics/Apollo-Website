import { registerAs } from '@nestjs/config';

export default registerAs(
    's3',
    (): Record<string, string | number | boolean | object> => ({
        credentials: {
            s3Region: process.env.S3_REGION,
            s3Bucket: process.env.S3_BUCKET,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
        },
        urlExpiresIn: process.env.IMAGE_URL_EXPIRES_IN || 600,
        keyPrefix: process.env.KEY_PREFIX || 'DOC',
        accessUrlPrefix: process.env.S3_ACCESS_URL_PREFIX || 'DOC',
    }),
);
