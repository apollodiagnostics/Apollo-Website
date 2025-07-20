import { Module } from '@nestjs/common';
import { TopItemRepository } from './repository/top_item.repository';
import { TopItemService } from './service/top_item.service';
import { TopItemController } from './controller/top_item.controller';
import { DatabaseModule } from 'src/database/database.module';
@Module({
    imports: [DatabaseModule],
    providers: [TopItemRepository, TopItemService],
    controllers: [TopItemController],
    exports: [],
})
export class TopItemModule {}
