import { Controller, Get, Param, Query } from '@nestjs/common';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { ArticleDto } from '../dto/article.dto';
import { ArticleService } from '../service/article.service';
import { responseName } from 'src/constants/response';

@Controller()
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Get(':id')
    @ResponseCustom(responseName.GET_ALL_GOOGLE_RATING)
    async getAllArticleById(@Param() param: ArticleDto) {
        return await this.articleService.getAllArticleById(param.id);
    }

    @Get()
    @ResponseCustom(responseName.GET_ALL_GOOGLE_RATING)
    async getAllArticle(@Query() query: ArticleDto) {
        return await this.articleService.getAllArticle(query);
    }
}
