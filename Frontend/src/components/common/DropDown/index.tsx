'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import { Box, Collapse } from '@mui/material'
import { LinkData } from '@models'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type DropDownProps = {
  title: string
  options: LinkData[]
  customStyles?: CustomStyles<StylesClassNames>
  onClick: () => void
  defaultState: boolean
}

export function DropDown({
  title,
  options,
  customStyles,
  onClick,
  defaultState,
}: DropDownProps) {
  const styles = getStyles(defaultStyles, customStyles)

  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(defaultState)
  function clickEventHandler() {
    setIsDropDownOpen(!isDropDownOpen)
  }
  useEffect(() => {
    setIsDropDownOpen(defaultState)
  }, [defaultState])

  return (
    <Box>
      <Box
        {...styles('heading', isDropDownOpen ? defaultStyles.activeCell : {})}
        onClick={() => clickEventHandler()}
      >
        {title}
        {isDropDownOpen ? (
          <KeyboardArrowUpRoundedIcon />
        ) : (
          <KeyboardArrowDownRoundedIcon />
        )}
      </Box>
      <Collapse in={isDropDownOpen} timeout={{ enter: 500, exit: 20 }}>
        <Box {...styles('optionsWrapper')}>
          {options.map((option) => {
            return (
              <Link
                href={option.link}
                key={option.label}
                style={{ textDecoration: 'none' }}
              >
                <Box {...styles('option')} onClick={() => onClick()}>
                  {option.label}
                </Box>
              </Link>
            )
          })}
        </Box>
      </Collapse>
    </Box>
  )
}
