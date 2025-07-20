import { ImageProps } from 'next/image'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box, Typography } from '@mui/material'
import { Button, ButtonProps, Image } from '@components/common'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyle, { StylesClassNames } from './styles'

export type OverviewData = {
  image: ImageProps
  descriptonSection: {
    date?: string
    time?: string
    mainHeading: string
    heading?: string
    description: string
    buttonProps: ButtonProps
  }
}
type OverviewProps = OverviewData & {
  customStyles?: CustomStyles<StylesClassNames>
}
export function Overview({
  image,
  descriptonSection,
  customStyles,
}: OverviewProps) {
  const styles = getStyles(defaultStyle, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('imageWrapper')}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          customStyles={{ wrapper: styles('image').sx }}
        />
      </Box>
      <Box {...styles('descriptionWrapper')}>
        <Box {...styles('headingSectionWrapper')}>
          <Box {...styles('headingWrapper')}>
            <Typography {...styles('mainHeading')}>
              {descriptonSection.mainHeading}
            </Typography>
            <Typography {...styles('heading')}>
              {descriptonSection.heading}
            </Typography>
          </Box>
        </Box>
        <Box {...styles('description')}> {descriptonSection.description}</Box>
        {descriptonSection.buttonProps.link && (
          <Box>
            <Button
              label={descriptonSection.buttonProps.label}
              link={descriptonSection.buttonProps.link}
              icon={<ArrowRightAltIcon />}
              variant="text"
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}
