import { Box, Typography } from '@mui/material'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type BookOnlineSlotData = {
  sectionHeading: string
  mainHeading: string
  heading?: string
  description: string
}
export function BookOnlineSlots({
  sectionHeading,
  mainHeading,
  heading,
  description,
}: BookOnlineSlotData) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('sectionHeadingWrapper')}>
        <Typography {...styles('sectionHeading')}>{sectionHeading}</Typography>
        <Box {...styles('headingWrapper')}>
          <Typography {...styles('mainHeading')}>{mainHeading}</Typography>
          {heading && <Typography {...styles('heading')}>{heading}</Typography>}
        </Box>
      </Box>
      <Box {...styles('descriptionWrapper')}>
        <Typography {...styles('description')}>{description}</Typography>
      </Box>
    </Box>
  )
}
