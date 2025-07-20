'use client'

import React, { useState } from 'react'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import { Box, Typography } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

type TabData = {
  label: string
  value: string
}

export type LeftTabsPanelData = {
  tabs: TabData[]
  activeTab?: string
}

export type LeftTabsPanelProps = LeftTabsPanelData & {
  onChange?: (value: string) => void
  customStyles?: CustomStyles<StylesClassNames>
}

export function LeftTabsPanel({
  onChange,
  tabs,
  activeTab: selectedTab,
  customStyles,
}: LeftTabsPanelProps) {
  const styles = getStyles(defaultStyles, customStyles)
  const [activeTab, setActiveTab] = useState(selectedTab || tabs[0].value)

  return (
    <Box {...styles('wrapper')}>
      {tabs.map((tab) => {
        return (
          <Box
            key={tab.value}
            {...styles(activeTab === tab.value ? 'activeTab' : 'tab')}
            onClick={() => {
              setActiveTab(tab.value)
              if (onChange) onChange(tab.value)
            }}
          >
            <Typography>{tab.label}</Typography>
            <ChevronRightRoundedIcon />
          </Box>
        )
      })}
    </Box>
  )
}
