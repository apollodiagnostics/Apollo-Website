import React from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { ImageType } from '@models'
import { Image as CommonImage } from '@components/common/Image'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type SelectionCardData = {
  image: ImageType
  label: string
  link: string
}

type SelectionCardProps = SelectionCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function SelectionCard({
  label,
  image,
  customStyles,
  link,
}: SelectionCardProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Link href={link} style={{ textDecoration: 'none' }}>
      <Box {...styles('wrapper')}>
        <CommonImage
          {...image}
          customStyles={{ wrapper: styles('image').sx }}
          fill
        />
        <Typography {...styles('tag')}>{label}</Typography>
      </Box>
    </Link>
  )
}
