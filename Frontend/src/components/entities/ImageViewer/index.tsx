import React from 'react'
import Link from 'next/link'
import { Box } from '@mui/material'
import { ImageType } from '@models'
import { Image } from '@components/common'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StyleClassNames } from './styles'

export type ImageViewerData = {
  link?: string
  image: ImageType
}

type ImageViewerProps = ImageViewerData & {
  customStyles?: CustomStyles<StyleClassNames>
}

export function ImageViewer({ image, link, customStyles }: ImageViewerProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      {link ? (
        <Link href={link} style={{ height: '600px' }}>
          <Image
            {...image}
            customStyles={{ wrapper: styles('image').sx }}
            fill
          />
        </Link>
      ) : (
        <Image {...image} customStyles={{ wrapper: styles('image').sx }} fill />
      )}
    </Box>
  )
}
