import { Injectable } from '@nestjs/common';
import { TestRepository } from '../repository/test.repository';
import { TestDTO } from '../dto/test.dto';

@Injectable()
export class TestService {
    constructor(private readonly testRepository: TestRepository) {}
    async getAllTests(options: TestDTO) {
        const test = await this.testRepository.getAllTestDetails(options);
        return test;
    }

    async getAllTestsById(id: number) {
        const test = await this.testRepository.getAllTestDetailsById(id);
        return { test };
    }
}
