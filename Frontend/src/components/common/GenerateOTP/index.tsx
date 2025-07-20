'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, InputBase, Typography } from '@mui/material'
import { sendReportOtp, verifyReportOtp } from '@utils/api/dashboard'
import { CustomStyles, getStyles } from '@utils/styles'
import { useSnackbar } from 'src/providers/alerts-state-management'
import defaultStyles, { StylesClassNames } from './styles'
import { Button } from '../Button'

export type GenerateOTPData = {
  placeHolder?: string
}

type Props = GenerateOTPData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export default function GenerateOTP({ customStyles }: Props) {
  const styles = getStyles(defaultStyles, customStyles)
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [otpValue, setOtpValue] = useState<string>('')
  const [otpState, setOtpState] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const { showSnackbar } = useSnackbar()
  const { push } = useRouter()

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value)
  }

  const handleGenerateOtp = () => {
    setLoading(true)
    sendReportOtp(phoneNumber)
      .then((otpResponse) => {
        if (otpResponse.statusCode !== 201) {
          showSnackbar(otpResponse.message, 'error')
          setLoading(false)
        }
        showSnackbar('OTP Sent Successfully', 'success')
        setOtpState(true)
        setLoading(false)
      })
      .catch(() => {
        showSnackbar('Mobile Number Not Found', 'warning')
        setLoading(false)
      })
  }

  const handleVerifyOtp = () => {
    setLoading(true)
    verifyReportOtp(phoneNumber, otpValue)
      .then((otpResponse) => {
        if (otpResponse.statusCode !== 200) {
          showSnackbar(otpResponse.message, 'error')
          setLoading(false)
          return
        }
        push(otpResponse.data.url)
        showSnackbar('OTP Verified Successfully', 'success')
        setLoading(false)
      })
      .catch(() => {
        showSnackbar('Invalid OTP', 'warning')
        setLoading(false)
      })
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <Box {...styles(['wrapper', 'mainWrapper'])}>
        <Box {...styles('wrapper')}>
          <InputBase
            {...styles('inputBase')}
            placeholder="Mobile Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            type="number"
          />
          <Button
            label="Send OTP"
            variant="contained"
            onClick={handleGenerateOtp}
            customStyles={{
              button: styles('button').sx,
            }}
            loading={loading}
            disabled={phoneNumber.length !== 10}
          />
        </Box>
        {otpState && (
          <Box {...styles('wrapper')}>
            <InputBase
              {...styles('inputBase')}
              placeholder="Enter OTP"
              value={otpValue}
              onChange={(event) => setOtpValue(event.target.value)}
              type="number"
            />
            <Button
              label="Verify OTP"
              variant="contained"
              onClick={handleVerifyOtp}
              customStyles={{
                button: styles('button').sx,
              }}
              disabled={otpValue.length !== 6}
              loading={loading}
            />
          </Box>
        )}
      </Box>
      <Typography variant="body2" {...styles('countryCode')}>
        +91
      </Typography>
    </Box>
  )
}
