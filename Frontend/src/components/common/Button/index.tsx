import React from 'react'
import Link from 'next/link'
import {
  Button as MuiButton,
  ButtonProps as MatButtonProps,
  CircularProgress,
} from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type ButtonProps = MatButtonProps & {
  customStyles?: CustomStyles<StylesClassNames>
  loading?: boolean
  label: React.ReactNode
  icon?: React.ReactNode
  link?: string
}

export function Button({
  customStyles,
  label,
  loading,
  variant = 'outlined',
  icon,
  className,
  link,
  disabled = false,
  ...rest
}: ButtonProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return link ? (
    <Link href={link} style={{ width: 'fit-content' }}>
      <MuiButton
        variant={variant}
        className={className}
        {...styles('button')}
        disabled={disabled || loading}
        {...rest}
      >
        {loading ? (
          <CircularProgress
            size={26}
            {...styles(variant === 'contained' ? 'loader' : 'invertLoader')}
          />
        ) : (
          <>
            {label}
            {icon &&
              React.cloneElement(icon as React.ReactElement, {
                ...styles('icon'),
              })}
          </>
        )}
      </MuiButton>
    </Link>
  ) : (
    <MuiButton
      variant={variant}
      className={className}
      {...styles('button')}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <CircularProgress
          size={26}
          {...styles(variant === 'contained' ? 'loader' : 'invertLoader')}
        />
      ) : (
        <>
          {label}
          {icon &&
            React.cloneElement(icon as React.ReactElement, {
              ...styles('icon'),
            })}
        </>
      )}
    </MuiButton>
  )
}
