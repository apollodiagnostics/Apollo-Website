import { Injectable } from '@nestjs/common';
import { CenterVisitSlot } from '../entity/center_visit_slots.entity';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { CENTER_VISIT_SLOTS_ERROR } from 'src/constants/error';

@Injectable()
export class CenterVisitSlotsRepository {
    async getAllCenterVisitSlots(limitNum: number, offsetNum: number) {
        return await CenterVisitSlot.findAndCountAll({
            limit: limitNum,
            offset: offsetNum,
        });
    }

    async getCenterVisitSlotsById(centerSlotid: number) {
        const centerSlots = await CenterVisitSlot.findOne({
            where: { id: centerSlotid },
        });
        if (!centerSlots) {
            throw new HttpExceptionWrapper(
                CENTER_VISIT_SLOTS_ERROR.DATA_NOT_FOUND,
            );
        }

        return centerSlots;
    }
}
