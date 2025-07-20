import { Box } from '@mui/material'
import { Image, ImageProps } from '@components/common/Image'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyle, { StylesClassNames } from './styles'

export type CentreOverviewData = {
  images: ImageProps[]
}
type CentreOverviewProps = CentreOverviewData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function CentreDetailsOverview({
  images,
  customStyles,
}: CentreOverviewProps) {
  const styles = getStyles(defaultStyle, customStyles)
  const [image1, image2, image3] = images

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('imagesWrapper')}>
        <Image
          src={image1.src}
          alt={image1.alt}
          fill
          customStyles={{ wrapper: styles('image').sx }}
        />
        <Image
          src={image2.src}
          alt={image2.alt}
          fill
          customStyles={{ wrapper: styles('image').sx }}
        />
      </Box>
      <Box {...styles('overviewImageWrapper')}>
        <Image
          src={image3.src}
          alt={image3.alt}
          fill
          customStyles={{ wrapper: styles('image').sx }}
        />
      </Box>
    </Box>
  )
}
