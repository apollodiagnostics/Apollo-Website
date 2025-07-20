import { Box, Typography } from '@mui/material'
import { Image } from '@components/common/Image'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type InitiativesData = {
  cardData: {
    nametitle: string
    description: string
    imageUrl: string
  }[]
}

export function Initiatives({ cardData }: InitiativesData) {
  const styles = getStyles(defaultStyles)

  return (
    <Box>
      {cardData.map((item, index) => (
        <Box
          key={item.nametitle}
          {...styles('mainWrapper', {
            flexDirection: {
              xs: 'column-reverse',
              md: index % 2 === 0 ? 'row' : 'row-reverse',
            },
          })}
        >
          <Box {...styles('imageWrapper')}>
            <Image
              src={item.imageUrl || '/images/recognition.png'}
              alt="intiatives image"
              fill
              customStyles={{ wrapper: styles('image').sx }}
            />
          </Box>
          <Box {...styles('descriptionWrapper')}>
            <Box {...styles('headingWrapper')}>
              <Typography {...styles('heading')}>{item.nametitle}</Typography>
            </Box>
            <Box>
              <Typography {...styles('description')}>
                {item.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}
