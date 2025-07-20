import { Module } from '@nestjs/common';
import { NewsController } from './controller/news.controller';
import { NewsService } from './service/news.service';
import { NewsRepository } from './repository/news.repository';

@Module({
    controllers: [NewsController],
    providers: [NewsService, NewsRepository],
    exports: [NewsRepository],
})
export class NewsModule {}
