/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */

'use client'

import React, { useEffect, useState } from 'react'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'
import { Box, Typography } from '@mui/material'
import { ImageType } from '@models'
import { Button, ButtonProps } from '@components/common/Button'
import { Image as CommonImage } from '@components/common/Image'
import { CustomStyles, getStyles } from '@utils/styles'
import { useCart } from 'src/providers/cart-management'
import { useGlobalDiscount } from 'src/providers/global-discount-management'
import { useUserState } from 'src/providers/login-state-management'
import defaultStyles, { StylesClassNames } from './styles'

export type PackageInfoCardData = {
  image?: ImageType
  heading: string
  tag?: string
  delivery?: string
  price: number
  discount?: number
  button2?: ButtonProps
  button1?: ButtonProps
  icon?: ImageType
  testCount?: number
  id: number
  itemId?: number
  cityId: number
  labId: number
}

type PackageInfoCardProps = PackageInfoCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}
export function PackageInfoCard(itemInfo: PackageInfoCardProps) {
  const {
    button1,
    button2,
    customStyles,
    image,
    delivery,
    discount,
    heading,
    price,
    tag,
    icon,
    testCount,
    itemId,
    id,
    cityId,
    labId,
  } = itemInfo
  const styles = getStyles(defaultStyles, customStyles)
  const { addNewItem, removeCartItem, cartItems } = useCart()
  const { userDetails } = useUserState()
  const { discount: globalDiscount } = useGlobalDiscount()
  const [cartState, setCartState] = useState(false)

  const appliedDiscount = discount || globalDiscount

  const handleCartClick = () => {
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
      cartItems?.some((item) => item?.itemid === itemId || item?.id === id)
    )
  }, [cartItems])

  return (
    <Box
      {...styles([`${!image ? 'testWrapper' : 'packageWrapper'}`, 'wrapper'])}
    >
      {image && (
        <CommonImage
          customStyles={{ wrapper: styles('image').sx }}
          {...image}
          fill
        />
      )}

      {icon && (
        <CommonImage
          customStyles={{ wrapper: styles('icon').sx }}
          {...icon}
          fill
        />
      )}

      <Box {...styles('infoContainer', { padding: !image ? 'unset' : '8px' })}>
        <Typography {...styles('heading')} variant="h3">
          {heading}
        </Typography>
        <Typography {...styles(`${!image ? 'test' : 'package'}Tag`)}>
          {tag}
        </Typography>
        <Typography {...styles('delivery')} variant="body2">
          Report delivery- &nbsp;
          <Box component="span" {...styles('deliveryText')}>
            {delivery}
          </Box>
        </Typography>
        {testCount && (
          <Typography {...styles('delivery')} variant="body2">
            {testCount} Tests
          </Typography>
        )}

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
      </Box>
      <Box {...styles('buttonWrapper')}>
        {button2 && (
          <Button {...button2} customStyles={{ button: styles('button').sx }} />
        )}
        {button1 && (
          <Button
            {...button1}
            variant="contained"
            customStyles={{
              button: styles(cartState ? 'removeButton' : 'button').sx,
            }}
            onClick={handleCartClick}
            label={cartState ? 'Remove' : 'Add to Cart'}
          />
        )}
      </Box>
      <Box {...styles('safeTag')}>
        <GppGoodOutlinedIcon {...styles('safeIcon')} />
        <Typography variant="body1" {...styles('safeText')}>
          SAFE
        </Typography>
      </Box>
    </Box>
  )
}
