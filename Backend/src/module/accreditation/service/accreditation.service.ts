import { Injectable } from '@nestjs/common';
import { AccreditationRepository } from '../repository/accreditation.repository';

@Injectable()
export class AccreditationService {
    constructor(private acrreditationRepository: AccreditationRepository) {}

    async getAllAccreditation(limit: number, offset: number) {
        return await this.acrreditationRepository.getAllAccreditation(
            limit,
            offset,
        );
    }

    async getAccreditationById(id: number) {
        return await this.acrreditationRepository.getAccreditationById(id);
    }
}
