import { Injectable } from '@nestjs/common';
import { CenterRepository } from '../repository/center.repository';
import { CenterQueryDto } from '../dto/center_query.dto';

@Injectable()
export class CenterService {
    constructor(private centerRepository: CenterRepository) {}
    async searchAllCenter(info: CenterQueryDto) {
        return await this.centerRepository.searchAllCenter(info);
    }

    async searchCenterById(id: number) {
        return await this.centerRepository.searchCenterById(id);
    }
}
