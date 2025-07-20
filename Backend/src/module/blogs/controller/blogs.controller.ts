import { Controller, Get, Param, Query } from '@nestjs/common';
import { BlogsService } from '../service/blogs.service';
import { ParamDto } from '../dto/blogs_param.dto';
import { BlogQueryDto } from '../dto/blogs_query.dto';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';

@Controller()
export class BlogsController {
    constructor(private blogsService: BlogsService) {}
    @Get()
    @ResponseCustom(responseName.ALL_BLOGS_FETCHED)
    async getAllBlogs(@Query() info: BlogQueryDto) {
        const { category, limit, offset } = info;
        return await this.blogsService.getAllBlogs(category, limit, offset);
    }

    @Get('/categories')
    @ResponseCustom(responseName.BLOGS_FETCHED)
    async getAllCategories(@Query() info: BlogQueryDto) {
        return await this.blogsService.getAllCategories(
            info.limit,
            info.offset,
        );
    }

    @Get(':id')
    @ResponseCustom(responseName.BLOGS_FETCHED)
    async getBlogById(@Param() param: ParamDto) {
        return await this.blogsService.getBlogById(param.id);
    }
}
