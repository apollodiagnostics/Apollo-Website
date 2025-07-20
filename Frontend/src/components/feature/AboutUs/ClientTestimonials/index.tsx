import { Box, Typography } from '@mui/material'
import { Button, ButtonProps } from '@components/common'
import {
  CurrentOpeningCard,
  CurrentOpeningData,
} from '@components/common/Cards/CurrentOpeningCard'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type ClientTestimonialsProps = {
  sectionHeading: string
  heading: string
  buttonProps?: ButtonProps
  openings: CurrentOpeningData[]
}

export function ClientTestimonials({
  sectionHeading,
  heading,
  buttonProps,
  openings,
}: ClientTestimonialsProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
      <Typography {...styles('sectionHeading')}>{sectionHeading}</Typography>
      <Box {...styles('headWrapper')}>
        <Typography variant="h2" className="spacing" {...styles('heading')}>
          {heading}
        </Typography>
        {buttonProps && (
          <Button
            label={buttonProps.label}
            link={buttonProps.link}
            variant="outlined"
          />
        )}
      </Box>
      <Box {...styles('cardContainer')}>
        {openings.map((item) => (
          <CurrentOpeningCard
            key={item.heading}
            {...item}
            customStyles={{
              card: styles('card').sx,
              heading: styles('cardHeading').sx,
              description: styles('description').sx,
              iconLabel: styles('iconLabel').sx,
              icons: styles('icons').sx,
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
