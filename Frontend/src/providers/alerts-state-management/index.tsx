/* eslint-disable react/jsx-no-constructed-context-values */

'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Snackbar } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

interface SnackbarContextType {
  showSnackbar: (
    message: string,
    severity?: AlertProps['severity'],
    duration?: number
  ) => void
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
)

export const useSnackbar = () => {
  const context = useContext(SnackbarContext)
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider')
  }
  return context
}

interface SnackbarProviderProps {
  children: ReactNode
}

export function SnackbarProvider({ children }: SnackbarProviderProps) {
  const [snackbarState, setSnackbarState] = useState<{
    message: string
    open: boolean
    severity?: AlertProps['severity']
    duration?: number
  }>({
    message: 'Hello from Snackbar',
    open: false,
    severity: 'info',
    duration: 4000,
  })

  const showSnackbar = (
    message: string,
    severity: AlertProps['severity'] = 'info',
    duration: number = 3000
  ) => {
    setSnackbarState({ message, open: true, severity, duration })
  }

  const handleClose = () => {
    setSnackbarState((prevState) => ({ ...prevState, open: false }))
  }

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={snackbarState.duration}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity={snackbarState.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarState.message}
        </MuiAlert>
      </Snackbar>
    </SnackbarContext.Provider>
  )
}
