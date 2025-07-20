import { Box, Typography } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type WhoAreWeData = {
  heading: string
  description: string
  video: {
    src: string
    thumbnail?: string
  }
}

type WhoAreWeProps = WhoAreWeData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function WhoWeAre({
  heading,
  description,
  video,
  customStyles,
}: WhoAreWeProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('mainWrapper')}>
      <Box {...styles('descriptionWrapper')}>
        <Box {...styles('headingWrapper')}>
          <Typography {...styles('heading')}>{heading}</Typography>
        </Box>
        <Box>
          <Typography {...styles('description')}>{description}</Typography>
        </Box>
      </Box>
      <Box {...styles('videoContainer')} component="iframe" src={video.src} />
    </Box>
  )
}
