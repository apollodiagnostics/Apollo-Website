/* eslint-disable no-nested-ternary */

'use client'

import { Box, Typography, useMediaQuery } from '@mui/material'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Button, ButtonProps } from '@components/common/Button'
import { BlogsCard, BlogsCardData } from '@components/common/Cards/BlogsCard'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StyleClassNames } from './styles'

export type BlogsSectionProps = {
  sectionHeading: string
  heading: string
  buttonProps: ButtonProps
  cards: BlogsCardData[]
}

type BlogCarouselData = SwiperProps & {
  cards: BlogsCardData[]
}

type BlogCarouselProps = BlogCarouselData & {
  customStyles?: CustomStyles<StyleClassNames>
}

export function BlogsSection({
  sectionHeading,
  heading,
  buttonProps,
  cards,
}: BlogsSectionProps) {
  const isMobile = useMediaQuery('(max-width:900px)')
  const isTablet = useMediaQuery('(max-width:1400px)')
  const isLaptop = useMediaQuery('(max-width:1800px)')
  const styles = getStyles(defaultStyles)
  const swiperSettings: BlogCarouselProps = {
    spaceBetween: 3,
    // centeredSlides: true,
    autoplay: true,
    navigation: true,
    loop: true,
    modules: [Navigation, Pagination],
    cards,
    speed: 1500,
    initialSlide: isMobile ? 0 : isTablet ? 2 : isLaptop ? 4 : 1,
    slidesPerView: isMobile ? 1 : isTablet ? 3 : isLaptop ? 4 : 4,
  }

  return (
    <Box {...styles('mainWrapper')}>
      <Box {...styles('wrapper')}>
        <Typography className="spacing" {...styles('sectionHeading')}>
          {sectionHeading}
        </Typography>
        <Box {...styles('headWrapper')}>
          <Typography className="spacing" {...styles('heading')}>
            {heading}
          </Typography>
          <Button
            label={buttonProps.label}
            link={buttonProps.link}
            variant={isMobile ? 'text' : 'outlined'}
          />
        </Box>
        <Box {...styles('cardContainer')}>
          <Swiper
            {...swiperSettings}
            pagination={!!isMobile}
            className="mySwiper"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.heading}>
                <Box px={7} {...styles('cardWrapper')}>
                  <BlogsCard
                    {...card}
                    customStyles={{ card: styles('card').sx }}
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
