'use client'

import { ReactNode } from 'react'
import { useGeolocation } from '@hooks'
import { BackDropLoader } from '@components/common'

interface CheckGeoLocationProviderProps {
  children: ReactNode
}

export function CheckGeoLocationProvider({
  children,
}: CheckGeoLocationProviderProps) {
  const { isLoading } = useGeolocation()

  return (
    <>
      <BackDropLoader open={isLoading} />
      {children}
    </>
  )
}
