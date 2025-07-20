'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { Box, Typography } from '@mui/material'
import {
  HistoryOrderCard,
  HistoryOrderCardData,
} from '@components/entities/HistoryOrderCard'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type OrdersOverviewData = {
  heading: string
  orders?: HistoryOrderCardData[]
}

export function OrdersOverview({ heading, orders }: OrdersOverviewData) {
  const styles = getStyles(defaultStyles)
  const router = useRouter()

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('navigation')} onClick={() => router.back()}>
        <ArrowBackRoundedIcon />
        Back
      </Box>
      {orders?.length ? (
        <>
          <Typography variant="h2" {...styles('heading')}>
            {heading}
          </Typography>
          <Box {...styles('cardsWrapper')}>
            {orders.map((order) => (
              <HistoryOrderCard
                customStyles={{ wrapper: styles('card').sx }}
                {...order}
                key={order.id}
              />
            ))}
          </Box>
        </>
      ) : (
        <Typography
          variant="h2"
          {...styles('heading', { textAlign: 'center' })}
        >
          No Orders Found
        </Typography>
      )}
    </Box>
  )
}
