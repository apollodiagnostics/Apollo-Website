'use client'

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from 'react'
import { useRouter } from 'next/navigation'
import { UserDetails } from '@models'
import { BackDropLoader } from '@components/common/BackDropLoader'
import {
  getUserFromCookies,
  removeUserFromCookies,
  setUserInCookies,
} from '@utils/auth'

type LoginStateProviderData = {
  userDetails: UserDetails | undefined
  addUserDetails: (userData: UserDetails) => void
  removeUserDetails: () => void
  isLoading: boolean
}

const LoginStateContext = createContext<LoginStateProviderData | undefined>(
  undefined
)

export const useUserState = (): LoginStateProviderData => {
  const context = useContext(LoginStateContext)
  if (!context) {
    throw new Error('useUserState must be used within a LoginStateProvider')
  }
  return context
}

type LoginStateProviderProps = {
  children: ReactNode
}

export function LoginStateProvider({ children }: LoginStateProviderProps) {
  const [userDetails, setUserDetails] = useState<UserDetails | undefined>(
    undefined
  )
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const addUserDetails = (userData: UserDetails) => {
    setUserDetails(userData)
  }
  const removeUserDetails = () => {
    setIsLoading(true)
    setUserDetails(undefined)
    removeUserFromCookies()
      .then(() => {
        setIsLoading(false)
      })
      .catch(() => {
        router.refresh()
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setIsLoading(true)
    getUserFromCookies()
      .then((user) => {
        setUserDetails(user)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    if (userDetails) void setUserInCookies(userDetails)
    setIsLoading(false)
  }, [userDetails])

  return useMemo(
    () => (
      <LoginStateContext.Provider
        value={{
          userDetails,
          addUserDetails,
          removeUserDetails,
          isLoading,
        }}
      >
        <BackDropLoader open={isLoading} />
        {children}
      </LoginStateContext.Provider>
    ),
    [children, userDetails, isLoading]
  )
}
