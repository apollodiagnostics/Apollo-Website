import React from 'react'
import { ImageViewer, ImageViewerData } from '@components/entities'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type AdvertisementSectionProps = ImageViewerData

export function AdvertisementSection(props: AdvertisementSectionProps) {
  const styles = getStyles(defaultStyle)
  return (
    <ImageViewer
      {...props}
      customStyles={{
        wrapper: styles('wrapper').sx,
        image: styles('image').sx,
      }}
    />
  )
}
