'use client'

import React, { useState } from 'react'
// import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Box, Typography } from '@mui/material'
import { useMutationQuery } from '@hooks'
import { Button, CheckBox, Input } from '@components/common'
import { ROUTES } from '@utils/api/routes'
import { getStyles } from '@utils/styles'
import { useSnackbar } from 'src/providers/alerts-state-management'
import { useDrawerState } from 'src/providers/drawer-state-management'
import defaultStyles from './styles'

export type LoginDrawerProps = {
  heading: string
}

export function LoginDrawer() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const { showSnackbar } = useSnackbar()
  const [checkboxState, setCheckboxState] = useState(true)
  const styles = getStyles(defaultStyles)
  const { toggleDrawerState, handleNextDrawer, drawerState } = useDrawerState()

  const { isLoading, mutateAsync } = useMutationQuery({
    url: ROUTES.SendOtp,
    method: 'post',
    service: 'DATA_CLIENT',
    options: {
      onSuccess() {
        showSnackbar('OTP sent successfully', 'success')
        sessionStorage.setItem('phoneNumber', phoneNumber)
        handleNextDrawer()
      },
      onError() {
        handleNextDrawer() // remove this when otp works
        sessionStorage.setItem('phoneNumber', phoneNumber)

        showSnackbar('Error sending OTP, Try Again', 'error')
      },
    },
  })

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 10) setPhoneNumber(e.target.value)
    else setPhoneNumber('')
  }

  const sendOtpHandler = () => {
    void mutateAsync({ mobileNumber: phoneNumber })
  }

  if (drawerState === 2)
    return (
      <Box {...styles('wrapper')}>
        <Box {...styles('header')}>
          <CloseRoundedIcon {...styles('icon')} onClick={toggleDrawerState} />
        </Box>
        <Box {...styles('itemWrapper')}>
          <Typography {...styles('itemHeading')}>Login / Register</Typography>
          <Box sx={{ position: 'relative' }}>
            <Input
              onChange={handlePhoneNumberChange}
              placeholder="Enter your mobile number"
              helperText="OTP will be sent to this number by SMS."
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendOtpHandler()
              }}
            />
            <Typography variant="body2" {...styles('countryCode')}>
              +91
            </Typography>
          </Box>
          <CheckBox
            label="Share health tips, appointment details and offers with me on WhatsApp"
            onClick={() => setCheckboxState(!checkboxState)}
            checked={checkboxState}
          />
        </Box>
        <Box {...styles('ctaWrapper')}>
          <Box {...styles('linksWrapper')}>
            <Typography {...styles('ctaText')}>
              By clicking Continue, you agree to Apollo Diagnostics
              <Box
                component="a"
                target="_blank"
                href="/privacy-policy"
                {...styles('policyHighlight')}
              >
                Privacy Policy.
              </Box>
              <Box
                component="a"
                target="_blank"
                href="/terms-and-conditions"
                {...styles('policyHighlight')}
              >
                Terms and Conditions
              </Box>
            </Typography>
          </Box>

          <Button
            label="Continue"
            variant="contained"
            loading={isLoading}
            customStyles={{ button: styles('ctaButton').sx }}
            onClick={sendOtpHandler}
            disabled={!phoneNumber}
          />
        </Box>
      </Box>
    )
}
