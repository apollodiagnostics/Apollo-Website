import { Injectable } from '@nestjs/common';
import { TestRepository } from '../repository/item.repository';
import { ItemQueryDto } from '../dto/item_query.dto';

@Injectable()
export class TestService {
    constructor(private testRepository: TestRepository) {}

    async getAllItem(obj: ItemQueryDto) {
        return await this.testRepository.getAllItem(obj);
    }

    async getGlobalDiscount() {
        return await this.testRepository.getGlobalDiscount();
    }

    async getItemById(id: number) {
        return await this.testRepository.getItemById(id);
    }
}
