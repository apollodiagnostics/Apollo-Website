import { Injectable } from '@nestjs/common';
import { CareerRepository } from '../repository/career.repository';

@Injectable()
export class CareerService {
    constructor(private careerRepository: CareerRepository) {}
    async getAllCareer(limit: number, offset: number) {
        return await this.careerRepository.getAllCareer(limit, offset);
    }

    async getCareerById(id: number) {
        return await this.careerRepository.getCareerById(id);
    }
}
