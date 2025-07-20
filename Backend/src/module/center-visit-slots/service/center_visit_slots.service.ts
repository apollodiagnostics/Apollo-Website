import { Injectable } from '@nestjs/common';
import { CenterVisitSlotsRepository } from '../repository/center_visit_slots.repository';

@Injectable()
export class CenterVisitSlotsService {
    constructor(private centerSlotsRepository: CenterVisitSlotsRepository) {}
    async getAllCenterVisitSlots(limit: number, offset: number) {
        return await this.centerSlotsRepository.getAllCenterVisitSlots(
            limit,
            offset,
        );
    }

    async getCenterVisitSlotsById(id: number) {
        return await this.centerSlotsRepository.getCenterVisitSlotsById(id);
    }
}
