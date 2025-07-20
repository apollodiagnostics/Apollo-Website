import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { HomeCollectionRepository } from '../repository/home_collection.repository';
import { RescheduleDto } from '../dto/reshedule_home_collection.dto';
import { CancelHomeCollectionDto } from '../dto/cancel_home_collection.dto';
import { ApolloHlService } from 'src/service-gateway/service/itdose_apollohl.service';
import { ApolloDynamicRoasterServiceGateway } from 'src/service-gateway/service/apollo_dynamic_roaster.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class HomeCollectionService {
    constructor(
        private homeCollectionRepository: HomeCollectionRepository,
        private readonly apolloHl: ApolloHlService,
        private readonly apolloDynamicRoasterService: ApolloDynamicRoasterServiceGateway,
        @Inject(WINSTON_MODULE_PROVIDER)
        private readonly logger: Logger,
    ) {}
    async getAllHomeCollection(mobileNumber: string) {
        return await this.homeCollectionRepository.getAllHomeCollection(
            mobileNumber,
        );
    }

    async rescheduleHomeCollection(info: RescheduleDto) {
        try {
            const rescheduleSlotsData = await this.getRescheduleData(info);
            const responseData =
                await this.apolloDynamicRoasterService.rescheduleSlot(
                    rescheduleSlotsData,
                );
            if (responseData.status == 'fail') {
                throw new BadRequestException(responseData.message);
            }

            const rescheduleHomeCollectionData = {
                client: info.client,
                preBookingId: info.preBookingId,
                preBookingIdDigital: info.preBookingIdDigital,
                newAppDate: info.newAppDate,
            };
            const reschedule = await this.apolloHl.rescheduleHomeCollection(
                rescheduleHomeCollectionData,
            );
            if (reschedule?.status === false) {
                throw new BadRequestException(reschedule.message);
            }

            await this.homeCollectionRepository.rescheduleHomeCollection(info);
        } catch (err) {
            this.logger.error(
                'Printing reschedule home collection error:',
                err,
            );
            throw new BadRequestException(err.message);
        }
    }

    async cancelHomeCollection(info: CancelHomeCollectionDto) {
        try {
            const cancelSlotData = {
                preBookingId: info.preBookingIdDigital,
                remarks: info.cancelRemarks,
            };

            const responseData =
                await this.apolloDynamicRoasterService.cancelOrder(
                    cancelSlotData,
                );

            this.logger.info(
                'Printing cancel slot response data:',
                responseData,
            );
            if (
                responseData.status == 'fail' ||
                responseData.message ==
                    'invalid prebooking id for cancellation!'
            ) {
                throw new BadRequestException(responseData.message);
            }

            const data = await this.apolloHl.cancelHomeCollection(info);
            this.logger.info(
                'Printing cancel home collection response data:',
                data,
            );

            if (data.status == false) {
                throw new BadRequestException(data.message);
            }
            await this.homeCollectionRepository.cancelHomeCollection(info);

            return data;
        } catch (err) {
            this.logger.error('Printing Cancel homecollection error', err);
            throw new BadRequestException(err);
        }
    }

    async getRescheduleData(info: RescheduleDto) {
        const dateOnly = info.newAppDate.split(' ')[0]; // Extracts "25-Sep-2024"
        const parsedDate = new Date(dateOnly); // Parses the date

        const formattedDate = parsedDate.toISOString().split('T')[0]; // Formats as "2024-09-25"

        const rescheduleSlots = {
            preBookingId: info.preBookingIdDigital,
            reason: 'remarks',
            slotTime: info.slotTime,
            slotDate: formattedDate,
        };

        return rescheduleSlots;
    }
}
