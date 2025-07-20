import { Injectable } from '@nestjs/common';
import { TestDTO } from '../dto/test.dto';
import { Test } from '../entity/test.entity';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { TEST_ERROR } from 'src/constants/error';

@Injectable()
export class TestRepository {
    async getAllTestDetails(options: TestDTO): Promise<Test[]> {
        const whereClause = options.name
            ? { where: { name: options.name } }
            : {};
        return await Test.findAll({
            ...whereClause,
            attributes: { exclude: ['created_at', 'updated_at'] },
            limit: options.limit || 1000,
            offset: options.offset || 0,
        });
    }
    async getAllTestDetailsById(id: number) {
        const test = await Test.findOne({
            where: { id },
            attributes: { exclude: ['created_at', 'updated_at'] },
        });
        if (!test) {
            throw new HttpExceptionWrapper(TEST_ERROR.TEST_NOT_FOUND);
        }
        return { test };
    }
}
