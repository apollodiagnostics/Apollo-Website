import { Injectable } from '@nestjs/common';
import { BlogsRepository } from '../repository/blogs.repository';

@Injectable()
export class BlogsService {
    constructor(private blogsRepository: BlogsRepository) {}
    async getAllBlogs(categoryId: number, limit: number, offset: number) {
        return await this.blogsRepository.getAllBlogs(
            categoryId,
            limit,
            offset,
        );
    }

    async getBlogById(id: number) {
        return await this.blogsRepository.getBlogById(id);
    }

    async getAllCategories(limit: number, offset: number) {
        return await this.blogsRepository.getAllCategories(limit, offset);
    }
}
