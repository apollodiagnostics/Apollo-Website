import { OverViewData } from '@components/common'
import {
  BannerProps,
  BioChemistryOverviewData,
  FeatureSectionProps,
  TestsSectionProps,
} from '@components/feature/Biochemistry'

export type DepartmentData = {
  banner: BannerProps
  testSection: TestsSectionProps
  biochemistryImages: BioChemistryOverviewData
  featureSection: FeatureSectionProps
  overview: OverViewData
}
