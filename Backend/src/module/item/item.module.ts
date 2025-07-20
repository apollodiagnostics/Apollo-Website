import { Module } from '@nestjs/common';
import { TestController } from './controller/item.controller';
import { TestService } from './service/item.service';
import { TestRepository } from './repository/item.repository';
@Module({
    imports: [],
    providers: [TestService, TestRepository],
    controllers: [TestController],
    exports: [],
})
export class ItemModule {}
