'use client'

import React, { useEffect, useState } from 'react'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Box, Typography } from '@mui/material'
import { useMutationQuery } from '@hooks'
import { Button } from '@components/common'
import { OtpInput } from '@components/common/OtpInput'
import { ROUTES } from '@utils/api/routes'
import { getStyles } from '@utils/styles'
import { QueryLoginResponse } from 'src/models/query.models'
import { useSnackbar } from 'src/providers/alerts-state-management'
import { useDrawerState } from 'src/providers/drawer-state-management'
import { useUserState } from 'src/providers/login-state-management'
import defaultStyles from './styles'

export type OtpDrawerProps = {
  heading: string
}

export function OtpDrawer() {
  const [opt, setOpt] = useState('')
  const { showSnackbar } = useSnackbar()
  const { addUserDetails, userDetails } = useUserState()
  const [seconds, setSeconds] = useState(30)
  const [showOTP, setShowOTP] = useState(false)
  const styles = getStyles(defaultStyles)
  const phoneNumber = sessionStorage.getItem('phoneNumber')

  const { toggleDrawerState, handlePrevDrawer, drawerState } = useDrawerState()
  const { isLoading, mutateAsync } = useMutationQuery({
    url: ROUTES.VerifyOtp,
    method: 'post',
    service: 'DATA_CLIENT',
    options: {
      onSuccess: (data: QueryLoginResponse, header) => {
        toggleDrawerState()
        showSnackbar('OTP Verified Successfully', 'success')
        addUserDetails({
          ...userDetails,
          phoneNumber: data.data.mobileNumber,
          profileId: data.data.profileId.toString(),
          accessToken: header['x-access-token'].toString(),
          newUser: !data.data.userExist,
        })
      },
      onError() {
        setOpt('')
        showSnackbar('Invalid OTP, Try Again', 'error')
      },
    },
  })

  const handleOptChange = (value: string) => {
    setOpt(value)
  }

  const verifyOtpHandler = () => {
    void mutateAsync({
      mobileNumber: phoneNumber,
      otp: opt,
    })
  }
  const { isLoading: resendIsLoading, mutateAsync: resendMutateAsync } =
    useMutationQuery({
      url: ROUTES.SendOtp,
      method: 'post',
      service: 'DATA_CLIENT',
      options: {
        onSuccess() {
          showSnackbar('OTP Sent Successfully', 'success')
        },
        onError() {
          showSnackbar('Error sending OTP, Try Again', 'error')
        },
      },
    })
  const handleResendOTP = () => {
    void resendMutateAsync({ mobileNumber: phoneNumber })
    setSeconds(30)
    setShowOTP(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else {
        setShowOTP(true)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds])

  if (drawerState === 3)
    return (
      <Box {...styles('wrapper')}>
        <Box {...styles('header')}>
          <ArrowBackRoundedIcon
            onClick={handlePrevDrawer}
            {...styles('icon')}
          />
          <CloseRoundedIcon {...styles('icon')} onClick={toggleDrawerState} />
        </Box>
        <Box {...styles('itemWrapper')}>
          <Typography {...styles('itemHeading')}>Enter OTP</Typography>
          <Typography {...styles('ctaText')}>
            Please enter the one time password (OTP) that has been sent to
            <Typography {...styles('phoneNumberHighlight')}>
              +91 {phoneNumber}
            </Typography>
          </Typography>
          <OtpInput
            length={6}
            onChange={handleOptChange}
            value={opt}
            onKeyDown={(e) => {
              if (e.key === 'Enter') verifyOtpHandler()
            }}
            inputMode="numeric"
          />
        </Box>
        <Box {...styles('ctaWrapper')}>
          <Box {...styles('ctaText')}>
            {showOTP ? (
              <Button
                label="Resend OTP"
                onClick={handleResendOTP}
                loading={resendIsLoading}
              />
            ) : (
              <>Didn&apos;t receive OTP? Resend in 0:{seconds}</>
            )}
          </Box>

          <Button
            label="Continue"
            variant="contained"
            loading={isLoading}
            customStyles={{ button: styles('ctaButton').sx }}
            onClick={verifyOtpHandler}
            disabled={opt.length !== 6}
          />
        </Box>
      </Box>
    )
}
