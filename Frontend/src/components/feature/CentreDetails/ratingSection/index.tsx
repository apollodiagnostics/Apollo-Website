import StarIcon from '@mui/icons-material/Star'
import { Box, Typography } from '@mui/material'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type RatingProps = {
  rating: string
}

export function RatingCard({ rating }: RatingProps) {
  const ratingValue = typeof rating === 'string' ? parseFloat(rating) : rating
  const stars = Array.from({ length: 5 }, (_, index) => index < ratingValue)
  const styles = getStyles(defaultStyles)
  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('infoContainer')}>
        <Typography variant="h5" {...styles('heading')}>
          Rating
        </Typography>
        <Box {...styles('rating')}>
          <Typography {...styles('rated')}>Rated</Typography>
          <Box {...styles('stars')}>
            {stars.map((filled, index) => (
              <StarIcon
                style={{ color: filled ? 'orange' : 'grey' }}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              />
            ))}
          </Box>
          <Typography>{rating}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
