'use client'

import React from 'react'
import { Box, Drawer as MuiDrawer } from '@mui/material'
import { getStyles } from '@utils/styles'
import { useDrawerState } from 'src/providers/drawer-state-management'
import defaultStyles from './styles'

export type DrawerProps = {
  children: React.ReactNode
}
export function Drawer({ children }: DrawerProps) {
  const styles = getStyles(defaultStyles)
  const { drawerState, toggleDrawerState } = useDrawerState()

  return (
    <MuiDrawer
      open={!!drawerState}
      anchor="right"
      {...styles('wrapper')}
      onClose={toggleDrawerState}
    >
      <Box {...styles('infoWrapper')}>{children}</Box>
    </MuiDrawer>
  )
}
