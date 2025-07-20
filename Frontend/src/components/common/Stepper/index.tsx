import React from 'react'
import {
  Stepper as MuiStepper,
  Step,
  StepLabel,
  StepperProps as MuiStepperProps,
} from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type StepperData = MuiStepperProps & {
  steps: string[]
}

type StepperProps = StepperData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function Stepper({
  activeStep = 0,
  orientation = 'horizontal',
  steps,
  ...rest
}: StepperProps) {
  const styles = getStyles(defaultStyles)
  return (
    <MuiStepper
      activeStep={activeStep}
      nonLinear
      orientation={orientation}
      {...rest}
      {...styles('wrapper')}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  )
}
