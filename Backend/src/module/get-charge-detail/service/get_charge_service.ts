import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApolloHlService } from 'src/service-gateway/service/itdose_apollohl.service';

@Injectable()
export class GetChargeDetailService {
    constructor(
        private readonly configService: ConfigService,
        private readonly apolloHl: ApolloHlService,
    ) {}
    async getChargeDetail(body: any) {
        try {
            const data = await this.apolloHl.getChargeDetail(body);
            return data;
        } catch (err) {
            throw new BadRequestException(err);
        }
    }
}
