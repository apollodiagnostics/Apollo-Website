import { Box, Typography } from '@mui/material'
import { Image, ImageProps } from '@components/common/Image'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type AwardsSectionData = {
  logo: ImageProps
  mainHeading: string
  heading: string
  cards: {
    image: ImageProps
    award: string
    designation: string
  }[]
}

export function AwardsSection({
  logo,
  mainHeading,
  heading,
  cards,
}: AwardsSectionData) {
  const styles = getStyles(defaultStyles)

  return (
    <Box
      {...styles('wrapper', {
        backgroundImage: `url('/images/backGround.webp')`,
      })}
    >
      <Box {...styles('innerWrapper')}>
        <Box {...styles('headingWrapper')}>
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            customStyles={{ wrapper: styles('logo').sx }}
          />
          <Typography {...styles('mainHeading')}>{mainHeading}</Typography>
          <Typography {...styles('heading')}>{heading}</Typography>
        </Box>
        <Box {...styles('cardWrapper')}>
          {cards.map((card) => (
            <Box {...styles('card')} key={card.award}>
              <Image
                src={card.image.src}
                alt={card.image.alt}
                fill
                customStyles={{ wrapper: styles('awardsImage').sx }}
              />
              <Box {...styles('descriptionWrapper')}>
                <Typography {...styles('cardHeading')}>{card.award}</Typography>
                <Typography {...styles('cardDescription')}>
                  {card.designation}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
