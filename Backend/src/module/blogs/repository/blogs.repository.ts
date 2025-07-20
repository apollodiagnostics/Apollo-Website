import { Injectable } from '@nestjs/common';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { BLOG_ERROR } from 'src/constants/error';
import { BlogsCategory } from '../entity/blogs_category.entity';
import { Blogs } from '../entity/blogs.entity';

@Injectable()
export class BlogsRepository {
    async getAllBlogs(categoryId: number, limitNum: number, offsetNum: number) {
        if (categoryId) {
            return await Blogs.findAndCountAll({
                where: { cat_id: categoryId },
                limit: limitNum,
                offset: offsetNum,
            });
        }

        return await Blogs.findAndCountAll({
            limit: limitNum,
            offset: offsetNum,
        });
    }

    async getBlogById(id: number) {
        const blog = await Blogs.findOne({ where: { id: id } });

        if (!blog) {
            throw new HttpExceptionWrapper(BLOG_ERROR.DATA_NOT_FOUND);
        }

        return blog;
    }

    async getAllCategories(limitNum: number, offsetNum: number) {
        return await BlogsCategory.findAndCountAll({
            limit: limitNum,
            offset: offsetNum,
        });
    }
}
