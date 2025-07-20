import { Box, Typography } from '@mui/material'
import { Button, ButtonProps } from '@components/common/Button'
import { BlogsCardData, BlogsCard } from '@components/common/Cards/BlogsCard'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type BlogsSectionProps = {
  sectionHeading: string
  heading: string
  buttonProps: ButtonProps
  cards: BlogsCardData[]
}

export function BlogsSection({
  sectionHeading,
  heading,
  buttonProps,
  cards,
}: BlogsSectionProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
      <Typography
        variant="h2"
        className="spacing"
        {...styles('sectionHeading')}
      >
        {sectionHeading}
      </Typography>
      <Box {...styles('headWrapper')}>
        <Typography variant="h2" className="spacing" {...styles('heading')}>
          {heading}
        </Typography>
        <Button
          label={buttonProps.label}
          link={buttonProps.link}
          variant="outlined"
        />
      </Box>
      <Box {...styles('cardContainer')}>
        {cards.map((item) => (
          <BlogsCard
            key={item.heading}
            {...item}
            customStyles={{ card: styles('card').sx }}
          />
        ))}
      </Box>
    </Box>
  )
}
