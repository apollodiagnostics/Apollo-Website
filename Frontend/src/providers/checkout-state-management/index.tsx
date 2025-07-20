'use client'

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from 'react'
import { CartItemsData } from '@models'
import {
  QuerySingleAddress,
  QuerySingleProfileData,
  QuerySlot,
} from 'src/models/query.models'

export type CheckoutData = {
  patients?: (QuerySingleProfileData & { cartItems: CartItemsData[] })[]
  address?: QuerySingleAddress
  slot?: QuerySlot
}

interface CheckoutStateContextProps {
  checkoutInfo?: CheckoutData
  setCheckoutInfo: (state: CheckoutData) => void
  totalAmount?: number
  deliveryCharge?: number
  healthCreditsRedeemed?: number
  setTotalAmount: (amount: number) => void
  setDeliveryCharge: (amount: number) => void
  setHealthCreditsRedeemed: (amount: number) => void
}

const CheckoutStateContext = createContext<
  CheckoutStateContextProps | undefined
>(undefined)

export const useCheckoutInfo = (): CheckoutStateContextProps => {
  const context = useContext(CheckoutStateContext)
  if (!context) {
    throw new Error(
      'useCheckoutInfo must be used within a CheckoutStateProvider'
    )
  }
  return context
}

interface CheckoutStateProviderProps {
  children: ReactNode
}

export function CheckoutStateProvider({
  children,
}: CheckoutStateProviderProps) {
  const [checkoutState, setCheckoutState] = useState<CheckoutData>({})
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [healthCreditsRedeemed, setHealthCreditsRedeemed] = useState<number>(0)
  const [deliveryCharge, setDeliveryCharge] = useState<number>(0)

  const setCheckoutInfo = (state: CheckoutData) => {
    setCheckoutState(state)
  }

  useEffect(() => {
    if (checkoutState.patients?.length) {
      const totalAmount = checkoutState.patients.reduce((sum, patient) => {
        const cartTotal = patient.cartItems.reduce(
          (cartSum, item) => cartSum + item.rate,
          0
        )
        return sum + cartTotal
      }, 0)
      setTotalAmount(totalAmount)
    } else {
      setTotalAmount(0)
      // setDeliveryCharge(0)
      setHealthCreditsRedeemed(0)
    }
  }, [checkoutState, healthCreditsRedeemed])

  return useMemo(
    () => (
      <CheckoutStateContext.Provider
        value={{
          checkoutInfo: checkoutState,
          setCheckoutInfo,
          totalAmount,
          setTotalAmount,
          deliveryCharge,
          setDeliveryCharge,
          healthCreditsRedeemed,
          setHealthCreditsRedeemed,
        }}
      >
        {children}
      </CheckoutStateContext.Provider>
    ),
    [
      children,
      checkoutState,
      totalAmount,
      deliveryCharge,
      healthCreditsRedeemed,
    ]
  )
}
