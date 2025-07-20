import React from 'react'
import { Box, Typography } from '@mui/material'
import { Image, ImageProps } from '@components/common/Image'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyle, { StyleClassNames } from './styles'

export type FeatureCardSectionData = {
  sectionHeading?: string
  mainHeading: string
  cards: {
    image: ImageProps
    heading: string
    description?: string
  }[]
}
type Props = FeatureCardSectionData & {
  customStyles?: CustomStyles<StyleClassNames>
}
export function FeatureCardSection({
  sectionHeading,
  mainHeading,
  cards,
  customStyles,
}: Props) {
  const styles = getStyles(defaultStyle, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('innerWrapper')}>
        <Box {...styles('sectionHeadingWrapper')}>
          {sectionHeading && (
            <Typography {...styles('sectionHeading')}>
              {sectionHeading}
            </Typography>
          )}
          <Typography {...styles('mainHeading')}>{mainHeading}</Typography>
        </Box>
        <Box {...styles('highlightsWrapper')}>
          {cards.map((item) => (
            <Box {...styles('card')} key={item.heading}>
              <Box {...styles('imageWrapper')}>
                <Image
                  alt={item.image.alt}
                  src={item.image.src}
                  fill
                  customStyles={{ wrapper: styles('image').sx }}
                />
              </Box>
              <Box {...styles('descriptionWrapper')}>
                <Typography {...styles('heading')}>{item.heading}</Typography>
                <Typography {...styles('description')}>
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
