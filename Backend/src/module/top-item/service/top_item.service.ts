import { Injectable } from '@nestjs/common';
import { TopItemRepository } from '../repository/top_item.repository';
@Injectable()
export class TopItemService {
    constructor(private packageRepository: TopItemRepository) {}

    async getAllTopPackage(
        cityId: number,
        itemId: number,
        itemType: string,
        search: string,
        limit: number,
        offset: number,
    ) {
        return await this.packageRepository.getAllTopPackage(
            cityId,
            itemId,
            itemType,
            search,
            limit,
            offset,
        );
    }
}
