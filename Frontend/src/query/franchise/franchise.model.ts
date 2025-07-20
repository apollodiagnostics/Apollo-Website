import { BannerProps } from '@components/feature/BookTest'
import {
  WhoAreWeData,
  FeaturesSectionData,
  AdvertisementSectionProps,
  ForBuisnessPartnersData,
  InsightsSectionProps,
  FAQSectionData,
} from '@components/feature/Franchise'
import { EnquireFormStaticData } from '@components/feature/Franchise/Enquire'

export type FranchiseData = {
  metaTitle: string
  metaDescription: string
  banner: BannerProps
  enquire: EnquireFormStaticData
  whoWeAre: WhoAreWeData
  advertisementSection1: AdvertisementSectionProps
  ourReach: InsightsSectionProps
  featuresSection: FeaturesSectionData
  FAQ: FAQSectionData
  advertisementSection2: AdvertisementSectionProps
  forBuisnessPartners: ForBuisnessPartnersData
}
