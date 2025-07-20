/* eslint-disable react/jsx-no-constructed-context-values */

'use client'

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'
import { useRouter } from 'next/navigation'
import { CartItemsData } from '@models'
import { BackDropLoader } from '@components/common/BackDropLoader'
import {
  addItemsToCart,
  getAllCartsItem,
  getHomeCollectionCharges,
  removeItemFromCart,
} from '@utils/api/dashboard'
import { useSnackbar } from '../alerts-state-management'
import { useCheckoutInfo } from '../checkout-state-management'
import { useUserState } from '../login-state-management'

// TODO: Remove ForceAny from here

type CartContextType = {
  cartItems: CartItemsData[]
  addNewItem: (item: CartItemsData) => void
  removeCartItem: (itemId: number, cityId: number, labId: number) => void
  loading: boolean
  homeCollectionCharges: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

type CartProviderProps = {
  children: ReactNode
}

export type CartData = CartItemsData[]

// TODO: Changes these all callback hell
export function CartProvider({ children }: CartProviderProps) {
  const { userDetails } = useUserState()
  const { showSnackbar } = useSnackbar()
  const router = useRouter()
  const [totalPrice, setTotalPrice] = useState(0)
  const [cartItems, setCartItems] = useState<CartData>([])
  const [pendingItems, setPendingItems] = useState<CartData>([])
  const [loading, setLoading] = useState(false)
  const { setCheckoutInfo, checkoutInfo, setDeliveryCharge } = useCheckoutInfo()
  const [homeCollectionCharges, setHomeCollectionCharges] = useState(0)

  const refetchAllCartItems = () => {
    setLoading(true)
    if (userDetails && userDetails.phoneNumber)
      getAllCartsItem(userDetails.phoneNumber)
        .then((data) => {
          setCartItems(data.data)
          setLoading(false)
        })
        .catch((error) => {
          showSnackbar(error.message, 'error')
          setLoading(false)
        })
  }

  const addNewItem = (item: CartItemsData) => {
    setLoading(true)
    if (!userDetails?.cityId) {
      showSnackbar('Please select a city first', 'warning')
      setLoading(false)
      return
    }
    if (userDetails.accessToken) {
      addItemsToCart([item.itemId])
        .then(() => {
          if (pendingItems.length > 0) {
            const pendingIds = pendingItems.map((item) => item.id)
            addItemsToCart(pendingIds)
              .then(() => {
                setPendingItems([])
                router.refresh()
                setLoading(false)
              })
              .catch((error) => {
                showSnackbar(error.message, 'error')
                setLoading(false)
              })
          }
          refetchAllCartItems()

          // if (userDetails.phoneNumber) {
          //   getAllCartsItem(userDetails.phoneNumber)
          //     .then((data) => {
          //       setCartItems(data.data)

          //       setLoading(false)
          //     })
          //     .catch((error) => {
          //       showSnackbar(error.message, 'error')
          //       setLoading(false)
          //     })
          // }
        })
        .catch(() => {
          setLoading(false)
          setPendingItems((prev) => [...prev, item])
        })
    } else {
      setLoading(false)
      setCartItems((prev) => [...prev, item])
      setPendingItems((prev) => [...prev, item])
    }
  }

  const removeCartItem = (itemId: number, cityId: number, labId: number) => {
    setLoading(true)
    if (checkoutInfo?.patients?.length) {
      const updatedPatients = checkoutInfo.patients.map((patient) => {
        const updatedCartItems = patient.cartItems.filter(
          (item) => item.id !== itemId
        )
        return {
          ...patient,
          cartItems: updatedCartItems,
        }
      })
      setCheckoutInfo({
        ...checkoutInfo,
        patients: updatedPatients,
      })
    }
    if (userDetails?.accessToken) {
      removeItemFromCart(itemId.toString(), cityId, labId)
        .then(() => {
          refetchAllCartItems()
          showSnackbar('Item removed from cart', 'success')
        })
        .catch(() => {
          showSnackbar('Error removing item from cart', 'error')
        })
    } else {
      const newCartItems = cartItems.filter((item) => item.itemId !== itemId)
      setCartItems(newCartItems)
    }
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    if (userDetails && userDetails.phoneNumber) {
      getAllCartsItem(userDetails.phoneNumber)
        .then((data) => {
          setCartItems(data.data)
          if (pendingItems.length > 0) {
            const pendingIds = pendingItems.map((item) => item.itemId)
            addItemsToCart(pendingIds)
              .then(() => {
                setPendingItems([])
                setLoading(false)
                refetchAllCartItems()
              })
              .catch((error) => {
                showSnackbar(error.message, 'error')
                setLoading(false)
              })
          }
          setLoading(false)
        })
        .catch((error) => {
          showSnackbar(error.message, 'error')
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [userDetails])

  useEffect(() => {
    if (cartItems.length === 0) {
      return
    }
    setCheckoutInfo({})
    setTotalPrice(
      cartItems.reduce(
        (acc, item) => (item.price ? acc + item.price : acc + item.rate),
        0
      )
    )
    if (userDetails?.accessToken && cartItems.length > 0)
      getHomeCollectionCharges({
        ItemID: cartItems.map((obj) => obj.itemid).join(','),
        TotalBillAmount: totalPrice.toString(),
        StateId: '1',
        minMaxRadius: '2',
      })
        .then((data) => {
          setHomeCollectionCharges(Number(data.data[0].Amount || 0))
          setDeliveryCharge(Number(data.data[0].Amount || 0))
        })
        .catch(() => {
          // showSnackbar(error.message, 'error')
        })
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addNewItem,
        removeCartItem,
        loading,
        homeCollectionCharges,
        totalPrice,
      }}
    >
      <BackDropLoader open={loading} />

      {children}
    </CartContext.Provider>
  )
}
