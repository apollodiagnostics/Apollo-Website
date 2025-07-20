import { Injectable } from '@nestjs/common';
import { SlotsDto } from '../dto/slots.dto';
import { BookSlotsRepository } from '../repository/slots.repository';

@Injectable()
export class BookSlotsService {
    constructor(private bookSlotsRepository: BookSlotsRepository) {}
    async bookSlots(obj: SlotsDto) {
        //return obj;
        return await this.bookSlotsRepository.bookSlots(obj);
    }
}
