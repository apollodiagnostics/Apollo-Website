/* eslint-disable no-nested-ternary */

'use client'

import { Box, useMediaQuery } from '@mui/material'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {
  TestimonialCard,
  TestimonialCardData,
} from '@components/common/Cards/TestimonialsCard'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StyleClassNames } from './styles'

export type TestimonialsSectionProps = SwiperProps & {
  cards: TestimonialCardData[]
}

type TestimonialsCarouselProps = TestimonialsSectionProps & {
  customStyles?: CustomStyles<StyleClassNames>
}

export function TestimonialsSection({ cards }: TestimonialsSectionProps) {
  const isMobile = useMediaQuery('(max-width:900px)')
  const isTablet = useMediaQuery('(max-width:1200px)')
  const styles = getStyles(defaultStyles)
  const swiperSettings: TestimonialsCarouselProps = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: true,
    navigation: true,
    modules: [Navigation],
    slidesPerView: 1,
    cards,
    speed: 1500,
    initialSlide: isMobile ? 0 : isTablet ? 0 : 1,
    loop: true,
  }

  return (
    <Box {...styles('mainWrapper')}>
      <Box {...styles('wrapper')}>
        <Box {...styles('cardContainer')}>
          <Swiper {...swiperSettings} className="mySwiper">
            {cards.map((card) => (
              <SwiperSlide key={card.heading}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <TestimonialCard
                    {...card}
                    customStyles={{
                      wrapper: styles('card').sx,
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  )
}
