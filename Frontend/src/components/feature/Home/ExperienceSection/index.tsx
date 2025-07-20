import { Box } from '@mui/material'
import { SectionHeader, SectionHeaderData } from '@components/common'
import { VideoOverviewData, VideoOverviewSection } from '@components/entities'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type ExperienceSectionProps = {
  sectionHeading: SectionHeaderData
  overview: VideoOverviewData
}

export function ExperienceSection({
  sectionHeading,
  overview,
}: ExperienceSectionProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('mainWrapper')}>
      <Box {...styles('wrapper')}>
        <SectionHeader
          {...sectionHeading}
          customStyles={{
            wrapper: styles('infoContainer').sx,
            heading: styles('heading').sx,
            description: styles('description').sx,
          }}
        />
        <VideoOverviewSection
          {...overview}
          customStyles={{
            wrapper: styles('overviewWrapper').sx,
            videosWrapper: styles('videosWrapper').sx,
            overviewVideoWrapper: styles('overviewVideoWrapper').sx,
            videoWrapper: styles('videoWrapper').sx,
          }}
        />
      </Box>
    </Box>
  )
}
