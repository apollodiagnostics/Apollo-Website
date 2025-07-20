import {
  BannerProps,
  FeatureCardProps,
  AdvertisementSectionProps,
  VisionAndMissionProps,
  InsightsSectionProps,
  InitiativesSectionProps,
  OverviewSectionData,
  RecognitionAndAwardsData,
  ImagePanelData,
  InitiativesData,
} from '@components/feature/ApolloGroup'

export type ApolloGroupData = {
  metaTitle: string
  metaDescription: string
  banner: BannerProps
  featureSection: FeatureCardProps
  advertisement: AdvertisementSectionProps
  vissionAndMission: VisionAndMissionProps
  insights: InsightsSectionProps // iske baad
  initaives1: InitiativesSectionProps
  overviewSection: OverviewSectionData
  initaives2: InitiativesSectionProps
  initaives3: InitiativesSectionProps
  recognitionAndAwards: RecognitionAndAwardsData
  imagePanel: ImagePanelData
  initiatives: InitiativesData
}
