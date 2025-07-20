import { VideoOverviewData, VideoOverviewSection } from '@components/entities'

export type TestimonialsOverviewData = VideoOverviewData

export function TestimonialsOverview(props: TestimonialsOverviewData) {
  return <VideoOverviewSection {...props} />
}
