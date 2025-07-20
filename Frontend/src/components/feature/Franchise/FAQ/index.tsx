'use client'

import React, { useState } from 'react'
import { Box } from '@mui/material'
import { Accordion, AccordionData } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type FAQSectionData = {
  data: AccordionData[]
}

export function FAQSection({ data }: FAQSectionData) {
  const styles = getStyles(defaultStyle)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const handleAccordionChange = (label: string) => {
    setOpenAccordion((prev) => (prev === label ? null : label))
  }
  return (
    <Box {...styles('wrapper')}>
      {data.map((item) => (
        <Accordion
          {...item}
          key={item.label}
          isOpen={openAccordion === item.label}
          onChange={() => handleAccordionChange(item.label)}
        />
      ))}
    </Box>
  )
}
