'use client'

import { ImageProps } from 'next/image'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box, Typography } from '@mui/material'
import { Button, ButtonProps } from '@components/common/Button'
import { Image } from '@components/common/Image'
import { CustomStyles, getStyles } from '@utils/styles'
import useDateFormatter from 'src/hooks/dateFormatter'
import defaultStyle, { StylesClassNames } from './styles'

export type BlogsCardData = {
  image: ImageProps
  date?: string
  time?: string
  heading: string
  description?: string
  buttonProps: ButtonProps
}
type BlogsCardProps = BlogsCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}
export function BlogsCard({
  image,
  date,
  time,
  heading,
  description,
  buttonProps,
  customStyles,
}: BlogsCardProps) {
  const styles = getStyles(defaultStyle, customStyles)
  const formatedDate = useDateFormatter(date)
  return (
    <Box {...styles('card')}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        customStyles={{ wrapper: styles('image').sx }}
      />
      <Box {...styles('descriptionWrapper')}>
        <Box {...styles('labelWrapper')}>
          <Typography {...styles('label')}>{formatedDate}</Typography>
          <Typography {...styles('label')}>{time}</Typography>
        </Box>
        <Box {...styles('headingWrapper')}>
          <Typography {...styles('heading')}>{heading}</Typography>
        </Box>
        {description && (
          <Box>
            <Typography {...styles('description')}>{description}</Typography>
          </Box>
        )}
        <Button
          label={buttonProps.label}
          link={buttonProps.link}
          icon={<ArrowRightAltIcon />}
          variant="text"
          customStyles={{ button: styles('button').sx }}
        />
      </Box>
    </Box>
  )
}
