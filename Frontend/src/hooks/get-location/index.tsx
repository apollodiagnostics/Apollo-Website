/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useState, useEffect } from 'react'
import error from 'next/error'
import { useRouter } from 'next/navigation'
import { defaultCity } from '@models'
import { ROUTES } from '@utils/api/routes'
import { getUserFromCookies } from '@utils/auth'
import { QueryCheckServiceability } from 'src/models/query.models'
import { useSnackbar } from 'src/providers/alerts-state-management'
import { useUserState } from 'src/providers/login-state-management'
import { useMutationQuery } from '../mutation-query'

interface Location {
  latitude: number | null
  longitude: number | null
}

type ResponseType = {
  location: Location
  error: typeof error
  isLoading: boolean
}

export const useGeolocation = (): ResponseType => {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  })
  const { showSnackbar } = useSnackbar()
  const router = useRouter()
  const { addUserDetails, userDetails } = useUserState()

  const { mutateAsync, isLoading } = useMutationQuery({
    url: ROUTES.CheckServiceability,
    service: 'DATA_CLIENT',
    method: 'post',
    options: {
      onSuccess: (data: QueryCheckServiceability) => {
        getUserFromCookies()
          .then((user) => {
            if (data?.data?.status === 'fail') {
              showSnackbar(data?.message, 'warning')
              if (!userDetails?.cityId) addUserDetails({ ...user, cityId: '9' })
              else addUserDetails(user)
            } else {
              addUserDetails({
                ...user,
                cityId: data?.data?.cityId,
                cityName: defaultCity.name,
              })
              router.refresh()
            }
          })
          .catch(() => {})
      },
    },
  })

  useEffect(() => {
    addUserDetails({ ...userDetails, cityId: '9' })
    if (navigator.geolocation) {
      const successCallback = (position: GeolocationPosition) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
        void mutateAsync({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })

        // getUserFromCookies()
        //   .then((user) => {
        //     console.log({
        //       ...user,
        //       location: {
        //         latitude: position.coords.latitude,
        //         longitude: position.coords.longitude,
        //       },
        //     })
        //     addUserDetails({
        //       ...user,
        //       location: {
        //         latitude: position.coords.latitude,
        //         longitude: position.coords.longitude,
        //       },
        //     })
        //     router.refresh()
        //   })
        //   .catch(() => {})
      }
      const errorCallback = (error: GeolocationPositionError) => {
        showSnackbar(error.message, 'warning')
        addUserDetails({
          ...userDetails,
          cityId: '9',
          cityName: defaultCity.name,
        })
      }
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    } else {
      showSnackbar('Geolocation is not supported by this browser', 'warning')
    }
  }, [])

  return { location, error, isLoading }
}
