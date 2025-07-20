import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserRepository } from './repository/user.repository';
import { UserService } from './service/user.service';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserRepository, UserService],
    exports: [],
})
export class UserModule {}
