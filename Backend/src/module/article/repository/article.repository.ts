import { MASTER_ERROR } from 'src/constants/error';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { ArticleDto } from '../dto/article.dto';
import { Article } from '../entity/article.entity';
import { Op } from 'sequelize';

export class ArticleRepository {
    async getAllArticle(options: ArticleDto) {
        const article = await Article.findAll({
            ...(options.id && { where: { id: options.id } }),
            ...(options.slug && {
                where: { slug: { [Op.eq]: options.slug } },
            }),
            attributes: {
                exclude: [
                    'updated_by',
                    'created_by',
                    'published_at',
                    'created_at',
                    'updated_at',
                ],
            },
            limit: options.limit || 1000,
            offset: options.offset || 0,
        });

        const formattedData = article.map((record) => {
            if (record?.card_data)
                return { ...record, card_data: JSON.parse(record.card_data) };
            else return { ...record };
        });
        return formattedData;
    }

    async getAllArticleById(id: number) {
        const article = await Article.findOne({
            where: { id },
            attributes: {
                exclude: [
                    'updated_by',
                    'created_by',
                    'published_at',
                    'created_at',
                    'updated_at',
                ],
            },
            raw: true,
        });

        if (!article) {
            throw new HttpExceptionWrapper(MASTER_ERROR.ARTICLE_NOT_FOUND);
        }

        return { ...article, card_data: JSON.parse(article?.card_data) };
    }
}
