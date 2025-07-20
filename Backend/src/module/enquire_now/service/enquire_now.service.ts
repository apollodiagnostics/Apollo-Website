import { Injectable } from '@nestjs/common';
import { EnquireDto } from '../dto/enquire_now.dto';
import { EnquireRepository } from '../repository/enquire_now.repository';

@Injectable()
export class EnquireService {
    constructor(private enquireRepository: EnquireRepository) {}
    async Enquire(obj: EnquireDto) {
        return await this.enquireRepository.enquire(obj);
    }
}
