'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { defaultCity } from '@models'
import { Button, ButtonProps } from '@components/common/Button'
import { CustomStyles, getStyles } from '@utils/styles'
import { useCart } from 'src/providers/cart-management'
import { useUserState } from 'src/providers/login-state-management'
import defaultStyles, { StylesClassNames } from './styles'

export type SearchCardData = {
  heading: string
  price: number
  discount?: number
  button1?: ButtonProps
  testCount?: string
  id: number
  slug: string
  itemId: number
  cityId: number
  itemType: string
  labId: number
}

type SearchCardProps = SearchCardData & {
  customStyles?: CustomStyles<StylesClassNames>
  onClick?: () => void
}
export function SearchCard(itemInfo: SearchCardProps) {
  const {
    button1,
    customStyles,
    discount,
    heading,
    price,
    testCount,
    slug,
    itemId,
    cityId,
    itemType,
    onClick,
    labId,
  } = itemInfo
  const styles = getStyles(defaultStyles, customStyles)
  const { addNewItem, removeCartItem, cartItems } = useCart()
  const [cartState, setCartState] = useState(false)

  const calculateMRP = (price: number, discount: number) => {
    return Math.round(price / (1 - discount / 100))
  }

  const handleCartClick = () => {
    if (!cartState) {
      addNewItem(itemInfo)
    } else {
      removeCartItem(itemId, cityId, labId)
    }
    setCartState((prevState) => !prevState)
  }

  useEffect(() => {
    setCartState(
      cartItems.some(
        (item) =>
          item.itemId === itemId || item.itemid === itemId || item.id === itemId
      )
    )
  }, [cartItems])
  const { userDetails } = useUserState()

  return (
    <Link
      href={
        itemType === 'Test'
          ? `/test-details/${userDetails?.cityName?.toLowerCase() || defaultCity.name}/${slug}`
          : `/package-details/${userDetails?.cityName?.toLowerCase() || defaultCity.name}/${slug}`
      }
      style={{ textDecoration: 'none' }}
      onClick={onClick}
    >
      <Box {...styles(['wrapper', 'packageWrapper'])}>
        <Box {...styles('infoContainer')}>
          <Typography {...styles('heading')} variant="h3">
            {heading}
          </Typography>
          {testCount && (
            <Typography {...styles('delivery')} variant="body2">
              {testCount}
            </Typography>
          )}
        </Box>
        <Box {...styles('detailsContainer')}>
          <Box {...styles('priceWrapper')}>
            {discount && (
              <>
                {/* <Typography {...styles('discount')} variant="body2">
                  {discount}% off
                </Typography> */}
                <Typography {...styles('discountedPrice')}>
                  ₹{calculateMRP(price, discount)}
                </Typography>
              </>
            )}
            <Typography {...styles('price')}>₹{price}</Typography>
          </Box>
          <Box {...styles('buttonWrapper')}>
            <Button
              {...button1}
              variant="outlined"
              customStyles={{
                button: styles(cartState ? 'removeButton' : 'button').sx,
              }}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleCartClick()
              }}
              label={cartState ? 'Remove' : 'Add'}
            />
          </Box>
        </Box>
      </Box>
    </Link>
  )
}
