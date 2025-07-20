import { Box, Typography } from '@mui/material'
import { BlogsCard, BlogsCardData } from '@components/common/Cards/BlogsCard'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type MonthlyEditionData = {
  sectionHeading: string
  heading: string
  cards: BlogsCardData[]
}

export function MonthlyEdition({
  heading,
  sectionHeading,
  cards,
}: MonthlyEditionData) {
  const styles = getStyles(defaultStyle)

  return (
    <Box {...styles('wrapper')}>
      <Typography {...styles('sectionHeading')}>{sectionHeading}</Typography>
      <Box {...styles('headingWrapper')}>
        <Typography {...styles('heading')}>{heading}</Typography>
      </Box>
      <Box {...styles('cardWrapper')}>
        {cards.map((item) => (
          <BlogsCard
            {...item}
            key={item.heading}
            customStyles={{
              card: styles('card').sx,
              image: styles('cardImage').sx,
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
