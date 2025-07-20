import { Box } from '@mui/material'
import {
  CurrentOpeningCard,
  CurrentOpeningData,
} from '@components/common/Cards/CurrentOpeningCard'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type FeedbackSectionProps = {
  openings: CurrentOpeningData[]
}

export function FeedbackSection({ openings }: FeedbackSectionProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('cardContainer')}>
        {openings.map((item) => (
          <CurrentOpeningCard
            key={item.heading}
            {...item}
            customStyles={{
              card: styles('card').sx,
              heading: styles('heading').sx,
              description: styles('description').sx,
              iconLabel: styles('iconLabel').sx,
              icons: styles('icon').sx,
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
