import React, { PropsWithChildren } from 'react'
import { Box } from '@mui/material'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type DisableWrapperData = {
  isDisable?: boolean
}

type DisableWrapperProps = PropsWithChildren & DisableWrapperData

export function DisableWrapper({
  children,
  isDisable = false,
}: DisableWrapperProps) {
  const styles = getStyles(defaultStyles)
  if (!isDisable) return children

  return <Box {...styles('wrapper')}>{children}</Box>
}
