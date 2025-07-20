import { Injectable } from '@nestjs/common';
import { NewsAndMediaDto } from '../dto/news.dto';
import { NewsRepository } from '../repository/news.repository';
@Injectable()
export class NewsService {
    constructor(private readonly newsRepository: NewsRepository) {}

    async getAllNewsAndMedia(options: NewsAndMediaDto) {
        const news = await this.newsRepository.getAllNewsAndMedia(options);
        return news;
    }
    async getAllNewsAndMediaById(id: number) {
        const news = await this.newsRepository.getAllNewsAndMediaById(id);
        return { news };
    }
}
