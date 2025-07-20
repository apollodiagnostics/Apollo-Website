'use client'

import React, { useEffect, useState } from 'react'
import { Box, InputBase, Typography } from '@mui/material'
import { useMutationQuery } from '@hooks'
import { Loader } from '@components/common'
import { getStyles } from '@utils/styles'
import { NullableProperties } from '@utils/typescript'
import {
  CustomerData,
  QueryHcOtpVerificationResponse,
  QueryHcSendOtpData,
} from 'src/models/query.models'
import { useSnackbar } from 'src/providers/alerts-state-management'
import { useCheckoutInfo } from 'src/providers/checkout-state-management'
import { useUserState } from 'src/providers/login-state-management'
import defaultStyles from './styles'
import { Button } from '../../common/Button'
import { CheckBox } from '../../common/CheckBox'
import { Image } from '../../common/Image'

export type HealthCreditData = {
  creditsData: NullableProperties<CustomerData>
}

export function HealthCredit({ creditsData }: HealthCreditData) {
  const styles = getStyles(defaultStyles)

  const [otpValue, setOtpValue] = useState<string>('')
  const [otpState, setOtpState] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [requestNumber, setRequestNumber] = useState<string>('')
  const { showSnackbar } = useSnackbar()
  const [possibleRedeemableCredits, setPossibleRedeemableCredits] =
    useState<number>(0)
  const { userDetails } = useUserState()
  const { totalAmount, deliveryCharge, setHealthCreditsRedeemed } =
    useCheckoutInfo()

  const { mutateAsync, isLoading } = useMutationQuery({
    url: 'hc-credit/send-otp',
    method: 'post',
    options: {
      onSuccess: (data: QueryHcSendOtpData) => {
        setRequestNumber(data.data.RequestNumber)
      },
      onError: () => {},
    },
    service: 'DATA_CLIENT',
  })

  const { mutateAsync: verifyOtp, isLoading: verifyLoading } = useMutationQuery(
    {
      url: 'hc-credit/validate-otp',
      method: 'post',
      options: {
        onSuccess: (data: QueryHcOtpVerificationResponse) => {
          if (data.statusCode === 200) {
            setHealthCreditsRedeemed(possibleRedeemableCredits)
            showSnackbar(
              `Health credit worth ${possibleRedeemableCredits} applied successfully.`,
              'success'
            )
            setIsChecked(false)
            setOtpState(true)
          } else showSnackbar('Invalid OTP', 'error')
        },
        onError: () => {
          showSnackbar('Invalid OTP', 'error')
        },
      },
      service: 'DATA_CLIENT',
    }
  )

  const handleVerifyOtp = async () => {
    await verifyOtp({
      requestNumber,
      businessUnit: 'Diagnostics',
      storeCode: 'webcus',
      mobileNumber: userDetails?.phoneNumber,
      otp: otpValue,
    })
  }

  const handleSendOtp = async () => {
    await mutateAsync({
      businessUnit: 'Diagnostics',
      storeCode: 'webcus',
      mobileNumber: userDetails?.phoneNumber,
      creditsRedeemed: possibleRedeemableCredits,
      orderId: '36',
    })
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    console.log(deliveryCharge)
    if (
      totalAmount &&
      creditsData.AvailableCredits &&
      deliveryCharge !== undefined
    )
      setPossibleRedeemableCredits(
        totalAmount + deliveryCharge > creditsData.AvailableCredits
          ? creditsData.AvailableCredits
          : totalAmount + deliveryCharge
      )
  }, [totalAmount])

  return (
    <Box {...styles('hcWrapper')}>
      <Box {...styles('creditsWrapper')}>
        <Box {...styles('healthCreditsWrapper')}>
          <Image
            src="/images/coin.png"
            alt="coin"
            fill
            customStyles={{ wrapper: { height: '24px', width: '24px' } }}
          />
          <Box {...styles('totalCredits')}>
            <Typography {...styles('healthCredits')}>Health Credits</Typography>
            <Typography {...styles('availableCredits')}>
              Available Credits: {creditsData.AvailableCredits}
            </Typography>
          </Box>
        </Box>
        <Box {...styles('checkCredits')}>
          <Typography
            {...styles('availCredits')}
            key={possibleRedeemableCredits}
          >
            {possibleRedeemableCredits}
          </Typography>
          {!otpState && (
            <CheckBox
              {...styles('creditsCheckbox')}
              label=""
              customStyles={{ checkBox: styles('creditsCheckbox').sx }}
              checked={isChecked}
              onClick={handleSendOtp}
            />
          )}
        </Box>
      </Box>
      {isLoading && (
        <Loader loading customStyles={{ wrapper: { margin: 'auto' } }} />
      )}
      {isChecked && (
        <Box>
          <Typography
            sx={{ fontSize: '14px', margin: '10px 10px' }}
          >{`Enter the OTP sent to your registered mobile number ${userDetails?.phoneNumber}`}</Typography>
          <Box sx={{ backgroundColor: 'common.white', position: 'relative' }}>
            <Box {...styles(['wrapper', 'mainWrapper'])}>
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
                  disabled={otpValue.length !== 4}
                  loading={verifyLoading}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {otpState && (
        <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <Image
            width={16}
            height={16}
            src="/images/tickIcon.png"
            alt="success img"
            customStyles={{
              wrapper: {
                width: 'unset',
                display: 'flex',
                alignItems: 'center',
              },
            }}
          />
          <Typography key={possibleRedeemableCredits}>
            Health credit worth {possibleRedeemableCredits} applied
            successfully.
          </Typography>
        </Box>
      )}
    </Box>
  )
}
