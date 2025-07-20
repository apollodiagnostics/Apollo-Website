'use client'

import React from 'react'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { Box, Typography } from '@mui/material'
import { ImageType } from '@models'
import { Button, ButtonProps } from '@components/common/Button'
import { Image as CommonImage } from '@components/common/Image'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type BlogCardData = {
  image?: ImageType
  heading: string
  description?: string
  button: ButtonProps
  icon?: ImageType
  date?: string
  time?: string
}

type BlogCardProps = BlogCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}
export function BlogCard({
  button,
  customStyles,
  image,
  description,
  heading,
  icon,
  date,
  time,
}: BlogCardProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles([`${icon ? 'test' : 'package'}Wrapper`, 'wrapper'])}>
      {image && (
        <CommonImage
          customStyles={{ wrapper: styles('image').sx }}
          {...image}
          fill
        />
      )}

      {icon && (
        <CommonImage
          customStyles={{ wrapper: styles('icon').sx }}
          {...icon}
          fill
        />
      )}

      <Box {...styles('infoContainer', { padding: icon ? 'unset' : '8px' })}>
        {(date || time) && (
          <Typography {...styles('tag')} variant="body2">
            {date}
            <Box {...styles('dot')} component="span" />
            {time}
          </Typography>
        )}

        <Typography {...styles('heading')} variant="h3">
          {heading}
        </Typography>
        <Typography {...styles('descriptionText')} variant="body2">
          {description}
        </Typography>
        <Button
          {...button}
          customStyles={{ button: styles('button').sx }}
          variant="text"
          icon={<ArrowForwardRoundedIcon />}
        />
      </Box>
    </Box>
  )
}
