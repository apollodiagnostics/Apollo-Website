import { Injectable } from '@nestjs/common';

import { ArticleDto } from '../dto/article.dto';
import { ArticleRepository } from '../repository/article.repository';
@Injectable()
export class ArticleService {
    constructor(private readonly articleRepository: ArticleRepository) {}

    async getAllArticle(options: ArticleDto) {
        const article = await this.articleRepository.getAllArticle(options);
        return article;
    }
    async getAllArticleById(id: number) {
        const article = await this.articleRepository.getAllArticleById(id);
        return { article };
    }
}
