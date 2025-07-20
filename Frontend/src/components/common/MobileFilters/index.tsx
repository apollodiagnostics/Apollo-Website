'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box, Button, Popover } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyle, { StylesClassNames } from './styles'
import { CheckBox } from '../CheckBox'
import { SidePanelMenuData } from '../SidePanelMenu'

// Define MobileFiltersProps with default generic
type MobileFiltersProps<T = string | number> = SidePanelMenuData<T> & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function MobileFilters<T = string | number>({
  options,
  customStyles,
}: MobileFiltersProps<T>) {
  const styles = getStyles(defaultStyle, customStyles)
  const router = useRouter()
  const [dropDownState, setDropDownState] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [selectedValues, setSelectedValues] = useState<T[]>([])
  const searchParams = useSearchParams()

  useEffect(() => {
    const currentConditions =
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      (searchParams.get('condition')?.split(',') as T[]) || []
    setSelectedValues(currentConditions)
  }, [searchParams])

  const handleCheckboxChange = (value: T) => {
    const isSelected = selectedValues.includes(value)
    const newSelectedValues = isSelected
      ? selectedValues.filter((val) => val !== value)
      : [...selectedValues, value]

    setSelectedValues(newSelectedValues)

    const params = new URLSearchParams(window.location.search)
    params.delete('condition')

    if (newSelectedValues.length > 0) {
      params.set('condition', newSelectedValues.join(','))
    }
    router.replace(`${window.location.pathname}?${params.toString()}`)
  }

  const toggleDropDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
    setDropDownState(!dropDownState)
  }

  return (
    <Box {...styles('mainWrapper')}>
      <Button
        variant="text"
        aria-describedby="id"
        endIcon={
          dropDownState ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
        }
        onClick={toggleDropDown}
        {...styles('heading')}
      >
        Filters
      </Button>
      {!!options.length && (
        <Popover
          open={dropDownState}
          anchorEl={anchorEl}
          onClose={() => {
            setDropDownState(false)
            setAnchorEl(null)
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            style: { marginTop: -30 },
          }}
          {...styles('popOverOptions')}
        >
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
        </Popover>
      )}
    </Box>
  )
}
