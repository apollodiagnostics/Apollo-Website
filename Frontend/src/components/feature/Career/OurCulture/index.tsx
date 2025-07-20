import { Box, Grid } from '@mui/material'
import { Image } from '@components/common'
import { CentreOverviewData } from '@components/entities'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type OurCultureData = CentreOverviewData

export function OurCulture({ images }: OurCultureData) {
  const styles = getStyles(defaultStyle)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('heading')}>Our Culture</Box>
      <Box>
        <Grid container spacing={2}>
          {images.map((image, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Grid item xs={12} md={4} key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  customStyles={{ wrapper: styles('image').sx }}
                />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}
