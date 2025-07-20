import { OverViewData } from '@components/common'
import {
  BannerProps,
  TestsSectionProps,
} from '@components/feature/MenHealthPackagesPages'

export type MenHealthPackagesPagesData = {
  metaTitle: string
  metaDescription: string
  banner: BannerProps
  testSection: TestsSectionProps
  overview: OverViewData
}
