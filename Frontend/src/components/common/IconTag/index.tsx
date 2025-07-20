import React from 'react'
import { Box } from '@mui/material'
import { ImageType } from '@models'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'
import { Image as CommonImage } from '../Image'

export type IconTagData = {
  icon: ImageType
}

type IconTagProps = IconTagData & {
  customStyles?: CustomStyles<StylesClassNames>
}
export function IconTag({ icon, customStyles }: IconTagProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <CommonImage
        {...icon}
        fill
        customStyles={{ wrapper: styles('icon').sx }}
      />
    </Box>
  )
}
