import React from 'react'
import { Box, Typography } from '@mui/material'
import { ImageType } from '@models'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type PageBannerData = {
  label: string
  backgroundImage?: ImageType
  path?: string
}

type PageBannerProps = PageBannerData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function PageBanner({
  customStyles,
  label,
  backgroundImage,
  path,
}: PageBannerProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box
      {...styles('wrapper', {
        backgroundImage: `url('${backgroundImage?.src}')`,
      })}
    >
      <Typography variant="h1" {...styles('label')}>
        {label}
      </Typography>
      <Typography variant="body2" {...styles('breadcrumb')}>
        {path}
      </Typography>
    </Box>
  )
}
