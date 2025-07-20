/* eslint-disable @typescript-eslint/no-unnecessary-condition */

'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box, Button, Collapse } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyle, { StylesClassNames } from './styles'
import { CheckBox } from '../CheckBox'

export type InputData<T = string | number> = {
  label: string
  value: T
}

export type SidePanelMenuData<T = string | number> = {
  heading: string
  options: InputData<T>[]
}

// Define SidePanelMenuProps with default generic
type SidePanelMenuProps<T = string | number> = SidePanelMenuData<T> & {
  customStyles?: CustomStyles<StylesClassNames>
  multiselect?: boolean
}

export function SidePanelMenu<T = string | number>({
  heading,
  options,
  customStyles,
  multiselect = true,
}: SidePanelMenuProps<T>) {
  const styles = getStyles(defaultStyle, customStyles)
  const router = useRouter()
  const [dropDownState, setDropDownState] = useState<boolean>(true)
  const [selectedValues, setSelectedValues] = useState<T[]>([])
  const searchParams = useSearchParams()

  useEffect(() => {
    const currentConditions =
      (searchParams.get('condition')?.split(',') as T[]) || []
    setSelectedValues(currentConditions)
  }, [searchParams])

  const handleCheckboxChange = (value: T) => {
    let newSelectedValues: T[]

    if (multiselect) {
      const isSelected = selectedValues.includes(value)
      newSelectedValues = isSelected
        ? selectedValues.filter((val) => val !== value)
        : [...selectedValues, value]
    } else {
      // For single select, just set the new value
      newSelectedValues = selectedValues.includes(value) ? [] : [value]
    }

    setSelectedValues(newSelectedValues)

    const params = new URLSearchParams(window.location.search)
    params.delete('condition')

    if (newSelectedValues.length > 0) {
      params.set('condition', newSelectedValues.join(','))
      params.delete('limit')
      params.delete('offset')
    }

    router.replace(`${window.location.pathname}?${params.toString()}`)
  }

  const toggleDropDown = () => {
    setDropDownState(!dropDownState)
  }

  return (
    <Box {...styles('mainWrapper')}>
      <Button
        variant="text"
        endIcon={
          dropDownState ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
        }
        onClick={toggleDropDown}
        {...styles('heading')}
      >
        {heading}
      </Button>
      <Collapse in={dropDownState} timeout={500}>
        <Box {...styles('options')}>
          {options.map((option) => (
            <CheckBox
              key={option.label}
              label={option.label}
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              customStyles={{ wrapper: styles('checkbox').sx }}
            />
          ))}
        </Box>
      </Collapse>
    </Box>
  )
}
