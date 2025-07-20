import { Injectable } from '@nestjs/common';
import { SlotsDto } from '../dto/slots.dto';
import { BookingSlots } from '../entity/slots_booking.entity';

@Injectable()
export class BookSlotsRepository {
    async bookSlots(obj: SlotsDto) {
        return (await BookingSlots.create(obj)).toJSON();
    }
}
