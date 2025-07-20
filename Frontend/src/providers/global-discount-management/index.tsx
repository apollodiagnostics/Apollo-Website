'use client'

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from 'react'

type GlobalDiscountContextType = {
  discount: number
  setDiscount: (value: number) => void
}

const GlobalDiscountContext = createContext<GlobalDiscountContextType | null>(
  null
)

type GlobalDiscountProviderProps = {
  children: ReactNode
  globalDiscount?: number
}

export function GlobalDiscountProvider({
  children,
  globalDiscount = 0,
}: GlobalDiscountProviderProps) {
  const [discount, setDiscount] = useState(globalDiscount)

  const value = useMemo(() => ({ discount, setDiscount }), [discount])

  return (
    <GlobalDiscountContext.Provider value={value}>
      {children}
    </GlobalDiscountContext.Provider>
  )
}

export const useGlobalDiscount = () => {
  const context = useContext(GlobalDiscountContext)
  if (!context) {
    throw new Error(
      'useGlobalDiscount must be used within a GlobalDiscountProvider'
    )
  }
  return context
}
