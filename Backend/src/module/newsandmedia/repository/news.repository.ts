import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { NewsAndMediaDto } from '../dto/news.dto';
import { News } from '../entity/news.entity';
import { MASTER_ERROR } from 'src/constants/error';

export class NewsRepository {
    async getAllNewsAndMedia(options: NewsAndMediaDto): Promise<News[]> {
        const news = await News.findAll({
            ...((options.id && { where: { id: options.id } }) || {}),
            attributes: { exclude: ['created_at', 'updated_at', 'date'] },
            limit: options.limit || 10,
            offset: options.offset || 0,
        });
        return news;
    }
    async getAllNewsAndMediaById(id: number) {
        const news = await News.findOne({
            where: { id },
            attributes: { exclude: ['created_at', 'updated_at', 'date'] },
        });

        if (!news) {
            throw new HttpExceptionWrapper(MASTER_ERROR.NEWS_MEDIA_NOT_FOUND);
        }
        return news;
    }
}
