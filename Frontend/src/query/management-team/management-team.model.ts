import {
  BannerProps,
  FeatureCardProps,
  OverviewSectionData,
  ManagementTeamSectionData,
  TeamListSectionData,
} from '@components/feature/ManagementTeam'

export type ManagementTeamData = {
  metaTitle: string
  metaDescription: string
  banner: BannerProps
  featureSection: FeatureCardProps
  overviewSection: OverviewSectionData
  mangementTeam: ManagementTeamSectionData
  teamSection: TeamListSectionData
}
