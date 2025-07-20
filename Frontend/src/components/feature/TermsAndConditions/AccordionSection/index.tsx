'use client'

import React, { useState } from 'react'
import { Box } from '@mui/material'
import { Accordion, AccordionData } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type AccordionSectionProps = {
  accordion: AccordionData[]
}

export function AccordionSection({ accordion }: AccordionSectionProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    accordion[0]?.label || ''
  )
  const styles = getStyles(defaultStyles)

  const handleAccordionChange = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label)
  }

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('accordionWrapper')}>
        {accordion.map((item) => (
          <Accordion
            {...item}
            key={item.label}
            isOpen={openAccordion === item.label}
            onChange={() => handleAccordionChange(item.label)}
            customStyles={{
              label: styles('label').sx,
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
