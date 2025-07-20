'use client'

import { Box } from '@mui/material'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'
import { PackageInfoCard, PackageInfoCardData } from '../Cards/PackageInfoCard'

export type CardCarouselData = SwiperProps & {
  cards: PackageInfoCardData[]
}

type CardCarouselProps = CardCarouselData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function CardCarousel({
  cards,
  customStyles,
  spaceBetween = 3,
  // centeredSlides = true,
  autoplay = true,
  navigation = true,
  modules = [Navigation, Pagination],
  slidesPerView = 4,
  ...rest
}: CardCarouselProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Swiper
        spaceBetween={spaceBetween}
        // centeredSlides={centeredSlides}
        autoplay={autoplay}
        navigation={navigation}
        modules={[...modules]}
        speed={1500}
        className="mySwiper"
        {...rest}
        slidesPerView={slidesPerView}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.heading}>
            <Box {...styles('cardWrapper')}>
              <PackageInfoCard
                {...card}
                customStyles={{
                  wrapper: { width: '248px', height: '358px' },
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
