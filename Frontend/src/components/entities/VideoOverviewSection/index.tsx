import { Box } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyle, { StylesClassNames } from './styles'

export type VideoOverviewData = {
  videos: {
    src: string
  }[]
}
type VideoOverviewProps = VideoOverviewData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function VideoOverviewSection({
  videos,
  customStyles,
}: VideoOverviewProps) {
  const styles = getStyles(defaultStyle, customStyles)

  const [video1, video2, video3] = videos

  return (
    <Box {...styles('wrapper')}>
      <Box
        {...styles('overviewVideoWrapper')}
        component="iframe"
        title="video"
        src={video1.src}
        loading="lazy"
        rel="preconnect"
      />
      <Box {...styles('videosWrapper')}>
        <Box
          {...styles('videoWrapper')}
          component="iframe"
          src={video2.src}
          title="video"
          loading="lazy"
          rel="preconnect"
        />
        <Box
          {...styles('videoWrapper')}
          component="iframe"
          src={video3.src}
          title="video"
          loading="lazy"
          rel="preconnect"
        />
      </Box>
    </Box>
  )
}
