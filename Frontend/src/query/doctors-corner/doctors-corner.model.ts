import {
  BannerProps,
  FeatureCardProps,
  MonthlyEditionData,
  OverviewData,
} from '@components/feature/DoctorsCorner'

export type DoctorsCornerData = {
  metaTitle: string
  metaDescription: string
  banner: BannerProps
  featureSection: FeatureCardProps
  overview: OverviewData
  monthlyEdition: MonthlyEditionData
}
