import React from 'react'
import { Backdrop, BackdropProps, CircularProgress } from '@mui/material'

export type BackDropLoaderProps = BackdropProps & {
  text?: string
}

export function BackDropLoader({ text, ...rest }: BackDropLoaderProps) {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      {...rest}
    >
      <CircularProgress color="inherit" />
      {text}
    </Backdrop>
  )
}
