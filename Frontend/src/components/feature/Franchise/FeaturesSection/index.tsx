import { Box, Typography } from '@mui/material'
import { Image, ImageProps } from '@components/common/Image'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type FeatureSection = {
  heading: string
  description: string
  image: ImageProps
}

export type FeaturesSectionData = { cards: FeatureSection[] }

type WhyUsDataProps = FeaturesSectionData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function FeaturesSection({ cards, customStyles }: WhyUsDataProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <>
      {cards.map((card, index) => {
        return (
          <Box
            {...styles('mainWrapper', {
              flexDirection:
                index % 2
                  ? { xs: 'column-reverse', md: 'row' }
                  : { xs: 'column-reverse', md: 'row-reverse' },
            })}
          >
            <Box {...styles('imageWrapper')}>
              <Image
                src={card.image.src}
                alt={card.image.alt}
                fill
                customStyles={{ wrapper: styles('image').sx }}
              />
            </Box>
            <Box {...styles('descriptionWrapper')}>
              <Box {...styles('headingWrapper')}>
                <Typography {...styles('heading')}>{card.heading}</Typography>
              </Box>
              <Box>
                <Typography {...styles('description')}>
                  {card.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        )
      })}
    </>
  )
}
