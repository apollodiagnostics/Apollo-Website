import { Module } from '@nestjs/common';
import { TestController } from './controller/test.controller';
import { TestRepository } from './repository/test.repository';
import { TestService } from './service/test.service';

@Module({
    imports: [],
    controllers: [TestController],
    providers: [TestRepository, TestService],
    exports: [TestRepository],
})
export class TestModule {}
