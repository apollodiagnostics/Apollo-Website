import React from 'react'
import { MuiOtpInput, MuiOtpInputProps } from 'mui-one-time-password-input'

export type OptInputData = MuiOtpInputProps

export function OtpInput(props: OptInputData) {
  return <MuiOtpInput {...props} />
}
