import React from 'react'
import { ImageCarousel, ImageCarouselData } from '@components/common'
import { setDataInCookies } from '@utils/auth'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type ImageCarouselSectionProps = ImageCarouselData

export function ImageCarouselSection({ images }: ImageCarouselSectionProps) {
  const styles = getStyles(defaultStyles)
  void setDataInCookies('homePageData', 'hello')

  return (
    <ImageCarousel
      images={images}
      customStyles={{ wrapper: styles('wrapper').sx }}
    />
  )
}
