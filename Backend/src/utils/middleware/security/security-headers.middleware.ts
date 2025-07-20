import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SecurityHeadersMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        res.removeHeader('X-Powered-By');
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.setHeader(
            'Strict-Transport-Security',
            'max-age=31536000; includeSubDomains; preload',
        );
        res.setHeader('X-Frame-Options', 'DENY');
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('Referrer-Policy', 'no-referrer');
        res.setHeader('Cache-Control', 'no-store');
        res.setHeader('X-XSS-Protection', '1; mode=block');
        res.setHeader('X-Powered-By', 'Apollo');
        next();
    }
}
