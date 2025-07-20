import { Injectable } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { Request } from 'express';

@Injectable()
export class CustomThrottlerGuard extends ThrottlerGuard {
    protected getTracker(req: Request): string {
        return (
            (req.headers['x-real-ip'] as string) ??
            (req.headers['x-forwarded-for'] as string)?.split(',')[0] ??
            req.socket.remoteAddress ??
            'unknown'
        );
    }
}
