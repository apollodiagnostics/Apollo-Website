import { Box, Typography } from '@mui/material'
import { Button, ButtonProps } from '@components/common'
import {
  CurrentOpeningCard,
  CurrentOpeningData,
} from '@components/common/Cards/CurrentOpeningCard'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type OpeningsSectionProps = {
  heading: string
  buttonProps?: ButtonProps
  openings: CurrentOpeningData[]
}

export function OpeningsSection({
  heading,
  buttonProps,
  openings,
}: OpeningsSectionProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
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
              heading: styles('mainHeading').sx,
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
