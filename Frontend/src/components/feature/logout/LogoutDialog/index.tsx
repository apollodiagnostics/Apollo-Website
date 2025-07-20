'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { BackDropLoader } from '@components/common'
import { useSnackbar } from 'src/providers/alerts-state-management'
import { useUserState } from 'src/providers/login-state-management'

export function LogoutDialog() {
  const router = useRouter()
  const { addUserDetails, userDetails } = useUserState()
  const { showSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!userDetails?.accessToken) return
    setIsLoading(true)
    addUserDetails({
      cityId: userDetails.cityId,
      location: userDetails.location,
    })
    router.refresh()
    showSnackbar('Logged out Successfully', 'success')
    setIsLoading(false)
    router.push('/')
  }, [userDetails])

  return <BackDropLoader open={isLoading} />
}
