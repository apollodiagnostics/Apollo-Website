import { Box, Typography } from '@mui/material'
import { Image, ImageProps } from '@components/common/Image'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyle, { StylesClassNames } from './styles'

export type TestimonialCardData = {
  heading: string
  image: ImageProps
  description: string
  name: string
  address: string
}

type TestimonialCardProps = TestimonialCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}
export function TestimonialCard({
  heading,
  image,
  description,
  name,
  address,
  customStyles,
}: TestimonialCardProps) {
  const styles = getStyles(defaultStyle, customStyles)
  return (
    <Box {...styles('wrapper')}>
      <Typography {...styles('heading')}>{heading}</Typography>
      <Image {...image} customStyles={{ wrapper: styles('image').sx }} fill />
      <Typography {...styles('description')}>{description}</Typography>
      <Typography {...styles('name')}>{name}</Typography>
      <Typography {...styles('address')}>{address}</Typography>
    </Box>
  )
}
