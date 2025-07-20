import { Box, List, ListItem, Typography } from '@mui/material'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type WalkInConditionsData = {
  sectionHeading: string
  mainHeading: string
  heading?: string
  description: string[]
}
export function WalkInConditions({
  sectionHeading,
  mainHeading,
  heading,
  description,
}: WalkInConditionsData) {
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
        <List {...styles('listContainer')}>
          {description.map((item) => {
            return <ListItem {...styles('description')}>{item}</ListItem>
          })}
        </List>
      </Box>
    </Box>
  )
}
