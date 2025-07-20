import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ItemInclusionServiceGateway } from 'src/service-gateway/service/hcapollo_diagnostics.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class ItemInclusionService {
    constructor(
        private configService: ConfigService,
        private readonly itemInclusionGateway: ItemInclusionServiceGateway,
        @Inject(WINSTON_MODULE_PROVIDER)
        private readonly logger: Logger,
    ) {}

    async itemInclusion(info: any) {
        try {
            const result = await this.itemInclusionGateway.getItemInclusionBulk(
                info.ItemIDList,
            );

            return result;
        } catch (err) {
            this.logger.info('Error during item inclusion:', { err });
            throw new BadRequestException(err);
        }
    }
}
