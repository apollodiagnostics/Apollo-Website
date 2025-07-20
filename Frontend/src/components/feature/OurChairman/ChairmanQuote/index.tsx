import { Box, Typography } from '@mui/material'
import { Image, ImageProps } from '@components/common/Image'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type ChairmanQuoteData = {
  heading: string
  name: string
  designation: string
  image: ImageProps
}

export function ChairmanQuoteSection({
  heading,
  name,
  designation,
  image,
}: ChairmanQuoteData) {
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
        <Box {...styles('nameWrapper')}>
          <Typography {...styles('name')}>{name}</Typography>
          <Typography {...styles('designation')}>{designation}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
