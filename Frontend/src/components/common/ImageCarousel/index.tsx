/* eslint-disable react/no-array-index-key */

'use client'

import Link from 'next/link'
import { Box } from '@mui/material'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ImageType } from '@models'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'
import { Image } from '../Image'

export type ImageCarouselData = SwiperProps & {
  images: ImageType[]
}

type ImageCarouselProps = ImageCarouselData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function ImageCarousel({
  images,
  customStyles,
  spaceBetween = 30,
  centeredSlides = true,
  autoplay = {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination = {
    clickable: true,
  },
  navigation = true,
  modules = [Autoplay, Pagination, Navigation],
  ...rest
}: ImageCarouselProps) {
  const styles = getStyles(defaultStyles, customStyles)
  return (
    <Box {...styles('wrapper')}>
      <Swiper
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        autoplay={autoplay}
        pagination={pagination}
        navigation={navigation}
        modules={modules}
        className="mySwiper"
        speed={1500}
        {...rest}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box {...styles('imageWrapper')}>
              <Link href={image.redirectionUrl!}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  customStyles={{ wrapper: styles('image').sx }}
                />
              </Link>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
