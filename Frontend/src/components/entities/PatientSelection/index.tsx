'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
// import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, Skeleton, Typography } from '@mui/material'
import { CartItemsData } from '@models'
import { Button, CheckBox } from '@components/common'
import { ROUTES } from '@utils/api/routes'
import { getStyles } from '@utils/styles'
import { useQuery } from 'src/hooks/use-query'
import {
  QueryAllProfilesData,
  QuerySingleProfileData,
} from 'src/models/query.models'
import { useCart } from 'src/providers/cart-management'
import { useCheckoutInfo } from 'src/providers/checkout-state-management'
import { useDrawerState } from 'src/providers/drawer-state-management'
import { useUserState } from 'src/providers/login-state-management'
import defaultStyles from './styles'
import { AddUhidProfileForm } from '../Forms/AddUhidProfileForm'

export type PatientSelectionProps = {
  heading: string
}

export function PatientSelection() {
  const router = useRouter()
  const { userDetails } = useUserState()
  const styles = getStyles(defaultStyles)
  const [profiles, setProfile] = useState<QuerySingleProfileData[]>()
  const [formState, setFormState] = useState(false)
  const { setCheckoutInfo, checkoutInfo } = useCheckoutInfo()
  const { cartItems } = useCart()
  const [selectedPatients, setSelectedPatients] = useState<
    (QuerySingleProfileData & { cartItems: CartItemsData[] })[]
  >(checkoutInfo?.patients || [])

  const { queryCall, isLoading } = useQuery({
    url: ROUTES.Profile,
    method: 'get',
    options: {
      onSuccess: (data: QueryAllProfilesData) => {
        setProfile(data.data.rows)
      },
    },
  })

  const { toggleDrawerState, drawerState } = useDrawerState()

  const handleNext = () => {
    if (userDetails?.accessToken) {
      toggleDrawerState()
      router.push('/cart')
    } else {
      toggleDrawerState()
      router.push('/')
    }
  }

  function handleSelection(data: QuerySingleProfileData) {
    setSelectedPatients((prevSelectedPatients) => {
      if (
        prevSelectedPatients.some(
          (patient) => patient.profileId === data.profileId
        )
      ) {
        return prevSelectedPatients.filter(
          (patient) => patient.profileId !== data.profileId
        )
      }
      return [...prevSelectedPatients, { ...data, cartItems }]
    })
  }

  useEffect(() => {
    if (userDetails?.phoneNumber)
      void queryCall({ mobileNumber: userDetails.phoneNumber })
  }, [formState, userDetails])

  useEffect(() => {
    setCheckoutInfo({ ...checkoutInfo, patients: selectedPatients })
  }, [selectedPatients])

  if (drawerState === 4)
    return (
      <>
        {formState && (
          <AddUhidProfileForm setSelfState={setFormState} variant="add" />
        )}

        <Box {...styles('wrapper')}>
          <Box {...styles('header')}>
            <Typography variant="h3" {...styles('heading')}>
              Select Patient (s)
            </Typography>
            <CloseRoundedIcon
              {...styles('closeIcon')}
              onClick={toggleDrawerState}
            />
          </Box>
          {isLoading ? (
            <>
              <Skeleton animation="wave" {...styles('skeleton')} />
              <Skeleton animation="wave" {...styles('skeleton')} />
              <Skeleton animation="wave" {...styles('skeleton')} />
            </>
          ) : (
            <Box {...styles('fetchedAddressContainer')}>
              {profiles?.map((profile) => (
                <Box {...styles('checkboxContainer')} key={profile.profileId}>
                  <Box sx={{ display: 'flex' }}>
                    <CheckBox
                      label=""
                      customStyles={{
                        wrapper: styles('checkbox').sx,
                        label: styles('checkboxLabel').sx,
                      }}
                      checked={
                        checkoutInfo?.patients?.some(
                          (patient) => patient.profileId === profile.profileId
                        ) ?? false
                      }
                      onClick={() => handleSelection(profile)}
                    />
                    <Box>
                      <Typography {...styles('checkboxLabel')}>
                        {`${profile.firstname} ${profile.lastname}`}
                      </Typography>
                      <Typography {...styles('checkboxLabel')}>
                        {`${profile.gender?.replace(/\b\w/g, (char) => char.toUpperCase())}, ${profile.relationship}`}
                      </Typography>
                    </Box>
                  </Box>

                  {/* <MoreVertIcon {...styles('optionIcon')} /> */}
                </Box>
              ))}
              <Box
                {...styles('linksWrapper')}
                onClick={() => setFormState(true)}
              >
                <Typography {...styles(['itemHeading', 'addMoreLink'])}>
                  <AddCircleOutlineRoundedIcon />
                  Add New Patient
                </Typography>
              </Box>
            </Box>
          )}

          <Box {...styles('ctaWrapper')}>
            <Button
              label={userDetails?.accessToken ? 'Continue' : 'Proceed to Login'}
              icon={<ArrowForwardIosRoundedIcon />}
              variant="contained"
              customStyles={{ button: styles('ctaButton').sx }}
              onClick={handleNext}
              disabled={!selectedPatients.length}
            />
          </Box>
        </Box>
      </>
    )
}
