import { Module } from '@nestjs/common';
import { BlogsService } from './service/blogs.service';
import { BlogsRepository } from './repository/blogs.repository';
import { BlogsController } from './controller/blogs.controller';

@Module({
    imports: [],
    providers: [BlogsService, BlogsRepository],
    controllers: [BlogsController],
    exports: [],
})
export class BlogsModule {}
