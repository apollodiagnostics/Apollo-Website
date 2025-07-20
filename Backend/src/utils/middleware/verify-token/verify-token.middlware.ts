import { Inject, Injectable, NestMiddleware } from '@nestjs/common';

import * as jwt from 'jsonwebtoken';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER)
        private readonly logger: Logger,
    ) {}
    use(req: any, res: any, next: () => void) {
        const { authorization } = req.headers;

        if (!authorization) {
            return res
                .status(401)
                .json({ error: 'Login first to create post.' });
        }
        const token = authorization.replace('Bearer ', '');
        jwt.verify(token, process.env.SECRET_KEY, (err: any, payload: any) => {
            if (err) {
                res.status(401).json({
                    error: 'Login first to create post.',
                });
            }

            const { mobilenumber } = payload;
            if (mobilenumber) {
                req.data = mobilenumber;
            }
        });

        next();
    }
}
