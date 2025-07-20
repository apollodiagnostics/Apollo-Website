import { Module } from '@nestjs/common';
import { ITDoseDiagnosticeService } from './service/itdose_diagnostic.service';
import { ApolloHlService } from './service/itdose_apollohl.service';
import { HcCreditServiceGateway } from './service/hc_credit.service';
import { ItemInclusionServiceGateway } from './service/hcapollo_diagnostics.service';
import { ApolloDynamicRoasterServiceGateway } from './service/apollo_dynamic_roaster.service';
import { UatLimsApolloHlServiceGateway } from './service/uatlims_apollohl.service';

@Module({
    imports: [],
    providers: [
        ITDoseDiagnosticeService,
        ApolloHlService,
        HcCreditServiceGateway,
        ItemInclusionServiceGateway,
        ApolloDynamicRoasterServiceGateway,
        UatLimsApolloHlServiceGateway,
    ],
    exports: [
        ITDoseDiagnosticeService,
        ApolloHlService,
        HcCreditServiceGateway,
        ItemInclusionServiceGateway,
        ApolloDynamicRoasterServiceGateway,
        UatLimsApolloHlServiceGateway,
    ],
})
export class ServiceGatewayModule {}
