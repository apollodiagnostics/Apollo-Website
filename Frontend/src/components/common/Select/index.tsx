'use client'

import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {
  Select as MUISelect,
  Box,
  MenuItem,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material'
import { InputData } from '@models'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyle, { StylesClassNames } from './styles'

export type SelectData = SelectProps & {
  MenuOptions: InputData[]
  placeHolder: string
  handleSelect: (item: string) => void
  value?: string
}

type Props = SelectData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function Select({
  MenuOptions,
  placeHolder,
  customStyles,
  handleSelect,
  value,
}: Props) {
  const [selectedValue, setSelectedValue] = useState('')
  const styles = getStyles(defaultStyle, customStyles)

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value)
    handleSelect(event.target.value)
  }

  return (
    <Box {...styles('wrapper')}>
      <MUISelect
        {...styles('selectWrapper')}
        onChange={handleChange}
        displayEmpty
        IconComponent={KeyboardArrowDownIcon}
        value={value || selectedValue}
      >
        <MenuItem disabled value="">
          <Box {...styles('inputLabel')}>{placeHolder}</Box>
        </MenuItem>

        {MenuOptions.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            {...styles('options')}
          >
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </Box>
  )
}
