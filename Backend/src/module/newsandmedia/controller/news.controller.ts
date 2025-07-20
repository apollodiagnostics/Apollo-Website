import { Controller, Get, Param, Query } from '@nestjs/common';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { NewsAndMediaByIdDto, NewsAndMediaDto } from '../dto/news.dto';
import { NewsService } from '../service/news.service';
import { responseName } from 'src/constants/response';

@Controller()
export class NewsController {
    constructor(private readonly newsService: NewsService) {}

    @Get(':id')
    @ResponseCustom(responseName.GET_ALL_NEWS_MEDIA)
    async getAllGoogleRatingById(@Param() param: NewsAndMediaByIdDto) {
        return await this.newsService.getAllNewsAndMediaById(param.id);
    }

    @Get()
    @ResponseCustom(responseName.GET_ALL_NEWS_MEDIA)
    async getAllNewsAndMedia(@Query() news: NewsAndMediaDto) {
        return await this.newsService.getAllNewsAndMedia(news);
    }
}
