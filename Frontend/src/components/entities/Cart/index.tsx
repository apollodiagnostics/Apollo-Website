'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Box, Divider, Typography } from '@mui/material'
import { Button, Image } from '@components/common'
import { getStyles } from '@utils/styles'
import { useCart } from 'src/providers/cart-management'
import { useCheckoutInfo } from 'src/providers/checkout-state-management'
import { useDrawerState } from 'src/providers/drawer-state-management'
import { useUserState } from 'src/providers/login-state-management'
import defaultStyles from './styles'

export type CartProps = {
  heading: string
}

export function Cart() {
  const { userDetails } = useUserState()
  const styles = getStyles(defaultStyles)
  const router = useRouter()
  const { checkoutInfo } = useCheckoutInfo()
  const { toggleDrawerState, handleNextDrawer, setDrawer, drawerState } =
    useDrawerState()
  const {
    cartItems,
    removeCartItem,
    // loading,
    homeCollectionCharges,
    totalPrice,
  } = useCart()

  const handleNext = () => {
    if (userDetails?.accessToken) {
      if (checkoutInfo?.patients?.length) {
        router.push('/cart')
        toggleDrawerState()
      } else setDrawer(4)
    } else {
      handleNextDrawer()
    }
  }

  if (drawerState === 1)
    return (
      <Box {...styles('wrapper')}>
        <Box {...styles('header')}>
          <Typography variant="h3" {...styles('heading')}>
            My Cart
          </Typography>
          <CloseRoundedIcon
            {...styles('closeIcon')}
            onClick={toggleDrawerState}
          />
        </Box>
        {!cartItems.length ? (
          <Typography sx={{ textAlign: 'center' }}>
            Your cart is empty
          </Typography>
        ) : (
          <>
            <Box {...styles('itemWrapper')}>
              {cartItems.map((item) => {
                return (
                  <Box {...styles('itemCard')} key={item.id}>
                    <Box {...styles('itemInfoWrapper')}>
                      <Typography variant="h6" {...styles('itemHeading')}>
                        {item.heading || item.itemname}
                      </Typography>
                      <Box {...styles('itemDescWrapper')}>
                        {item.report_delivery && (
                          <Image
                            src="/icons/reportIcon.svg"
                            alt="HbA1c"
                            customStyles={{ wrapper: styles('reportIcon').sx }}
                            fill
                          />
                        )}
                        <Typography
                          variant="body1"
                          {...styles('itemDescription')}
                        >
                          {item.delivery || item.report_delivery}
                        </Typography>
                      </Box>
                    </Box>
                    <Box {...styles('sideWrapper')}>
                      <Box {...styles('pricesWrapper')}>
                        {!!item.discounted && (
                          <Typography
                            {...styles(['itemDescription', 'fullPrice'])}
                          >
                            ₹{item.price || item.rate}
                          </Typography>
                        )}
                        <Typography {...styles('itemHeading')}>
                          ₹ {item.price || item.rate}
                        </Typography>
                      </Box>
                      <Button
                        variant="outlined"
                        label="Remove"
                        customStyles={{ button: styles('removeButton').sx }}
                        onClick={() =>
                          removeCartItem(
                            item.itemid || item.itemId,
                            item.city_id,
                            item.lab_id
                          )
                        }
                        // loading={loading}
                      />
                    </Box>
                  </Box>
                )
              })}
            </Box>
            <Box {...styles('linksWrapper')}>
              <Link
                href="/test-booking"
                style={{ textDecoration: 'none' }}
                onClick={toggleDrawerState}
              >
                <Typography {...styles(['itemHeading', 'addMoreLink'])}>
                  <AddCircleOutlineRoundedIcon />
                  Add more Tests/ Check
                </Typography>
              </Link>
            </Box>
            <Box {...styles('summaryWrapper')}>
              <Box {...styles('categoryPrice')}>
                <Typography {...styles('itemDescription')}>
                  M.R.P Total
                </Typography>
                <Typography {...styles(['itemDescription', 'price'])}>
                  ₹{totalPrice}.00
                </Typography>
              </Box>
              {/* <Box {...styles('categoryPrice')}>
                <Typography {...styles('itemDescription')}>
                  Coupon Discount
                </Typography>
                <Typography
                  {...styles(['itemDescription', 'discountPrice', 'price'])}
                >
                  - ₹00.00
                </Typography>
              </Box>
              <Box {...styles('categoryPrice')}>
                <Typography {...styles('itemDescription')}>
                  Price Discount
                </Typography>
                <Typography
                  {...styles(['itemDescription', 'discountPrice', 'price'])}
                >
                  - ₹00.00
                </Typography>
              </Box> */}
              <Box {...styles('categoryPrice')}>
                <Typography {...styles('itemDescription')}>
                  Home Collection Charges
                </Typography>
                <Typography {...styles(['itemDescription', 'price'])}>
                  ₹{homeCollectionCharges}.00
                </Typography>
              </Box>
              <Divider />
              <Box {...styles('categoryPrice')}>
                <Typography {...styles(['itemHeading', 'price'])}>
                  Total
                </Typography>
                <Typography {...styles(['itemHeading', 'price'])}>
                  ₹{totalPrice + homeCollectionCharges}.00
                </Typography>
              </Box>
            </Box>
          </>
        )}

        <Box {...styles('ctaWrapper')}>
          <Box {...styles('cartMiniSummary')}>
            <Image
              src="/icons/cartIcon.svg"
              alt=""
              customStyles={{ wrapper: styles('cartIcon').sx }}
              fill
            />
            <Box key={cartItems.length}>
              {!!cartItems.length && (
                <>
                  <Typography {...styles(['itemHeading', 'price'])}>
                    ₹{totalPrice + homeCollectionCharges}.00
                  </Typography>
                  <Typography {...styles('itemDescription')}>
                    {cartItems.length} Items
                  </Typography>
                </>
              )}
            </Box>
          </Box>
          <Button
            label={userDetails?.accessToken ? 'Continue' : 'Proceed to Login'}
            icon={<ArrowForwardIosRoundedIcon />}
            variant="contained"
            customStyles={{ button: styles('ctaButton').sx }}
            onClick={handleNext}
            disabled={!cartItems.length}
          />
        </Box>
      </Box>
    )
}
