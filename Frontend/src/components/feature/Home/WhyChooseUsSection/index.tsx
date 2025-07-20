import React from 'react'
import { ImageViewer, ImageViewerData } from '@components/entities'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type WhyChooseUsSectionProps = ImageViewerData

export function WhyChooseUsSection(props: WhyChooseUsSectionProps) {
  const styles = getStyles(defaultStyles)

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
