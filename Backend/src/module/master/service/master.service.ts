import { MasterRepository } from '../repository/master.repository';
import { LocationDto } from '../dto/location.dto';
import { CategoryDto } from '../dto/category.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MasterService {
    constructor(private masterRepository: MasterRepository) {}

    async getAllLocations(options: LocationDto) {
        const location = await this.masterRepository.getAllLocations(options);
        return location;
    }

    async getAllStates(limit: number, offset: number) {
        const location = await this.masterRepository.getAllSates(limit, offset);
        return location;
    }

    async getAllCities(
        stateId: number,
        cityId: number,
        areaId: number,
        limit: number,
        offset: number,
    ) {
        const location = await this.masterRepository.getAllCities(
            cityId,
            stateId,
            limit,
            offset,
        );
        return location;
    }

    async getAllCategory(options: CategoryDto) {
        const category = await this.masterRepository.getAllCategory(options);
        return category;
    }

    async getCategoryById(id: number) {
        return await this.masterRepository.getCategoryById(id);
    }

    async getAllCondition(
        slug: string,
        cityId: number,
        stateId: number,
        limit: number,
        offset: number,
    ) {
        const condition = await this.masterRepository.getAllConditionDetails(
            slug,
            cityId,
            stateId,
            limit,
            offset,
        );
        return condition;
    }

    async getConditionById(id: number) {
        return await this.masterRepository.getConditionById(id);
    }
}
