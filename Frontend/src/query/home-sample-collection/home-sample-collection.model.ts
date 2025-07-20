import { FeatureSectionProps } from '@components/feature/Biochemistry'
import {
  TestsSectionProps,
  BannerProps,
  DiagnosisSectionData,
} from '@components/feature/HomeSampleCollection'

export type HomeSampleData = {
  banner: BannerProps
  testSection: TestsSectionProps
  featureSection: FeatureSectionProps
  diagnosisSection: DiagnosisSectionData
}
