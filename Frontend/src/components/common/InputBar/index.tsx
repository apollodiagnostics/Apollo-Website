'use client'

import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Box, useMediaQuery } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'
import { Button } from '../Button'

export interface InputBarData {
  placeHolder?: string
  buttonLabel?: string
  onChangeHandler?: (value: string) => void
  defaultValue?: string
}

type InputBarProps = InputBarData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function InputBar({
  placeHolder,
  buttonLabel,
  customStyles,
  onChangeHandler,
  defaultValue,
}: InputBarProps) {
  const styles = getStyles(defaultStyles, customStyles)
  const [searchValue, setSearchValue] = useState<string>(defaultValue || '')
  const isSmallScreen = useMediaQuery('(max-width: 600px)')

  const debounce = (func: (value: string) => void, delay: number) => {
    let timerId: ReturnType<typeof setTimeout>
    return (value: string) => {
      clearTimeout(timerId)
      timerId = setTimeout(() => {
        func(value)
      }, delay)
    }
  }

  const debouncedOnChangeHandler = debounce((value: string) => {
    if (onChangeHandler) onChangeHandler(value)
  }, 300)

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target
    setSearchValue(value)
    debouncedOnChangeHandler(value)
  }

  const handleSearch = () => {
    if (onChangeHandler) onChangeHandler(searchValue)
  }

  useEffect(() => {}, [searchValue])

  return (
    <Box component="form" {...styles('wrapper')}>
      <IconButton {...styles('iconButton')}>
        <SearchIcon />
      </IconButton>
      <InputBase
        {...styles('inputBase')}
        placeholder={placeHolder}
        value={searchValue}
        onChange={handleSearchInputChange}
      />
      {buttonLabel && (
        <Button
          label={isSmallScreen ? '' : 'search'}
          icon={isSmallScreen && <SearchIcon />}
          variant="contained"
          onClick={handleSearch}
          customStyles={{
            button: styles('button').sx,
          }}
        />
      )}
    </Box>
  )
}
