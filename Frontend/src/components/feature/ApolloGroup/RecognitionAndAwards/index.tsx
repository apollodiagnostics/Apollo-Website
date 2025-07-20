import { Box, Typography } from '@mui/material'
import { Image, ImageProps } from '@components/common/Image'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type RecognitionAndAwardsData = {
  heading: string
  description: string
  image: ImageProps
}

export function RecognitionAndAwardsSection({
  heading,
  description,
  image,
}: RecognitionAndAwardsData) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('mainWrapper')}>
      <Box {...styles('imageWrapper')}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          customStyles={{ wrapper: styles('image').sx }}
        />
      </Box>
      <Box {...styles('descriptionWrapper')}>
        <Box {...styles('headingWrapper')}>
          <Typography {...styles('heading')}>{heading}</Typography>
        </Box>
        <Box>
          <Typography {...styles('description')}>{description}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
