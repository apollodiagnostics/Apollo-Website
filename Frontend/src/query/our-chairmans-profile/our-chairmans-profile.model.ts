import {
  AwardsSectionData,
  BannerProps,
  ChairmanQuoteData,
  DoublePanelDescriptionProps,
  FeatureCardProps,
  OverviewSectionData,
} from '@components/feature/OurChairman'

export type OurChairmansData = {
  metaTitle: string
  metaDescription: string
  banner: BannerProps
  featureSection: FeatureCardProps
  quote: ChairmanQuoteData
  description1: DoublePanelDescriptionProps
  overview: OverviewSectionData
  description2: DoublePanelDescriptionProps
  awards: AwardsSectionData
}
