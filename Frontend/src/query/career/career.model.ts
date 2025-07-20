import {
  BannerProps,
  CareerOverviewData,
  FeatureCardProps,
  OpeningsSectionProps,
  WhyJoinUsData,
  WorkWithUsProps,
} from '@components/feature/Career'
import { OurCultureData } from '@components/feature/Career/OurCulture'

export type CareerData = {
  metaTitle: string
  metaDescription: string
  banner: BannerProps
  featureSection: FeatureCardProps
  overviewSection: CareerOverviewData
  workWithUs: WorkWithUsProps
  whyJoinUs: WhyJoinUsData
  openingSection: OpeningsSectionProps
  ourCulture: OurCultureData
}
