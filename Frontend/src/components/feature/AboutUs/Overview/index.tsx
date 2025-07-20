import { VideoOverviewData, VideoOverviewSection } from '@components/entities'

export type OverviewData = VideoOverviewData

export function Overview(props: OverviewData) {
  return <VideoOverviewSection {...props} />
}
