import { Box } from '@mui/material'
import { Image, ImageProps } from '@components/common/Image'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type ImagePanelData = {
  images: ImageProps[]
}
export function ImagePanel({ images }: ImagePanelData) {
  const styles = getStyles(defaultStyle)
  const [image1, image2] = images

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('overviewImageWrapper')}>
        <Image
          src={image1.src}
          alt={image1.alt}
          fill
          customStyles={{ wrapper: styles('image').sx }}
        />
      </Box>
      <Box {...styles('imagesWrapper')}>
        <Image
          src={image2.src}
          alt={image2.alt}
          fill
          customStyles={{ wrapper: styles('image').sx }}
        />
      </Box>
    </Box>
  )
}
