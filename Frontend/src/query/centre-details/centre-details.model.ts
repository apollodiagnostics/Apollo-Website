import { PageBannerData } from '@components/entities'
import {
  OtherLabsData,
  NearbyLocalitiesData,
  BuisnessData,
  FeatureSectionProps,
  CentreOverviewDataProps,
  RatingProps,
} from '@components/feature/CentreDetails'

export type CentreDetails = {
  banner: PageBannerData
  buisness: BuisnessData
  featureSection: FeatureSectionProps
  overView: CentreOverviewDataProps
  labs: OtherLabsData
  nearbyLocalities: NearbyLocalitiesData
  tags: NearbyLocalitiesData
  ratingSection: RatingProps
}
