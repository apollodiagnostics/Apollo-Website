import React from 'react'
import { ImageProps } from 'next/image'
import { Box } from '@mui/material'
import { Image } from '@components/common'
import {
  DescriptionData,
  DescriptionSection,
} from '@components/entities/DescriptionSection'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type ClientTestimonialsData = {
  descriptionsectionProps: DescriptionData
  image: ImageProps
}

export function ClientTestimonials({
  descriptionsectionProps,
  image,
}: ClientTestimonialsData) {
  const styles = getStyles(defaultStyle)

  return (
    <Box {...styles('mainWrapper')}>
      <DescriptionSection
        {...descriptionsectionProps}
        customStyles={{
          sectionHeading: styles('sectionHeading').sx,
          wrapper: styles('wrapper').sx,
        }}
      />
      <Box {...styles('imageWrapper')}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          customStyles={{ wrapper: styles('image').sx }}
        />
      </Box>
    </Box>
  )
}
