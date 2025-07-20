'use client'

import React, { useEffect, useState } from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment'
import InfoIcon from '@mui/icons-material/Info'
import ScienceIcon from '@mui/icons-material/Science'
import { Box, Typography } from '@mui/material'
import { Button } from '@components/common/Button'
import { CustomStyles, getStyles } from '@utils/styles'
import { useCart } from 'src/providers/cart-management'
import { useGlobalDiscount } from 'src/providers/global-discount-management'
import { useUserState } from 'src/providers/login-state-management'
import defaultStyles, { StylesClassNames } from './styles'

export type FinalPriceCardData = {
  delivery?: string
  description?: string
  price?: number
  sampleType?: string
  discount?: number
  itemId?: number
  cityId?: number
  id?: number
  heading?: string
  labId: number
}

type FinalPriceCardProps = FinalPriceCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function FinalPriceCard(itemInfo: FinalPriceCardProps) {
  const {
    customStyles,
    delivery,
    sampleType,
    price,
    description,
    cityId,
    itemId,
    id,
    discount,
    heading,
    labId,
  } = itemInfo
  const { userDetails } = useUserState()
  const [cartState, setCartState] = useState(false)
  const styles = getStyles(defaultStyles, customStyles)
  const { addNewItem, removeCartItem, cartItems } = useCart()
  const { discount: globalDiscount } = useGlobalDiscount()

  const appliedDiscount = discount || globalDiscount

  const handleCartClick = () => {
    if (!cityId) {
      return
    }
    if (!cartState) {
      addNewItem(itemInfo)
    } else {
      removeCartItem(Number(itemId), cityId, labId)
    }
    if (userDetails?.cityId) setCartState((prevState) => !prevState)
  }

  const calculateMRP = (price: number, discount: number) => {
    return Math.round(price / (1 - discount / 100))
  }

  useEffect(() => {
    setCartState(
      cartItems.some((item) => item.itemid === itemId || item.id === id)
    )
  }, [cartItems])

  return (
    <Box {...styles(['testWrapper', 'wrapper'])}>
      <Box {...styles('infoContainer', { padding: 'unset' })}>
        <Typography {...styles('heading')} variant="body2">
          {heading}
        </Typography>

        {price && (
          <Box {...styles('priceWrapper')}>
            <Typography {...styles('discountedPrice')} variant="body2">
              ₹{price}
            </Typography>
            {!!appliedDiscount && (
              <>
                <Typography {...styles('price')} variant="body2">
                  ₹{calculateMRP(price, appliedDiscount)}
                </Typography>
                <Typography {...styles('discount')} variant="body2">
                  {appliedDiscount}% off
                </Typography>
              </>
            )}
          </Box>
        )}

        {sampleType && (
          <Box {...styles('delivery')}>
            <ScienceIcon {...styles('descIcon')} />
            <Box component="span" {...styles('deliveryText')}>
              <Typography {...styles('type')}>Sample Type : </Typography>
              <Typography {...styles('queryData')}>{sampleType}</Typography>
            </Box>
          </Box>
        )}

        {delivery && (
          <Box {...styles('delivery')}>
            <AssignmentIcon {...styles('descIcon')} />
            <Box component="span" {...styles('deliveryText')}>
              <Typography {...styles('type')}>Report Delivery : </Typography>
              <Typography {...styles('queryData')}>{delivery}</Typography>
            </Box>
          </Box>
        )}

        {description && (
          <Box {...styles('delivery')}>
            <InfoIcon {...styles('descIcon')} />
            <Box component="span" {...styles('deliveryText')}>
              <Typography {...styles('type')}>
                Pre-test Information :
              </Typography>
              <Typography {...styles('queryData')}>{description}</Typography>
            </Box>
          </Box>
        )}
      </Box>
      <Box {...styles('buttonWrapper')}>
        <Button
          variant="contained"
          customStyles={{
            button: styles(cartState ? 'removeButton' : 'button').sx,
          }}
          onClick={handleCartClick}
          label={cartState ? 'Remove' : 'Add to Cart'}
        />
      </Box>
    </Box>
  )
}
