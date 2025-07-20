import {
  BannerProps,
  BookOnlineSlotData,
  BookTestData,
  HighLightsSectionData,
  WalkInConditionsData,
} from '@components/feature/BookWalKIn'

export type BookWalkInData = {
  banner: BannerProps
  bookWalkIn: BookTestData
  bookOnline: BookOnlineSlotData
  highlights: HighLightsSectionData
  termsAndConditions: BookOnlineSlotData
  walkInCondtions: WalkInConditionsData
}
