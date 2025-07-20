'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUserState } from 'src/providers/login-state-management'
import { AddUhidProfileForm } from '../Forms/AddUhidProfileForm'

export function ProfileAuthValidator() {
  const { userDetails, addUserDetails, isLoading } = useUserState()
  const [formState, setFormState] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (
      userDetails &&
      'newUser' in userDetails &&
      !!userDetails.newUser !== formState
    ) {
      setFormState(!!userDetails.newUser)
    }
  }, [isLoading, userDetails])

  useEffect(() => {
    if (userDetails && userDetails.newUser !== formState) {
      addUserDetails({ ...userDetails, newUser: formState })
      router.refresh()
    }
  }, [formState])

  return (
    formState && (
      <AddUhidProfileForm
        setSelfState={setFormState}
        variant="edit"
        heading="Update Profile"
        allowClosing={false}
        userProfileId={userDetails?.profileId}
      />
    )
  )
}
