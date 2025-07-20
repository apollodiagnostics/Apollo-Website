'use client'

import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Accordion, AccordionData } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type FaqSectionProps = {
  sectionHeading?: string
  heading: string
  items: AccordionData[]
}

export function FaqSection({
  sectionHeading,
  heading,
  items,
}: FaqSectionProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    items[0]?.label || ''
  )
  const styles = getStyles(defaultStyles)

  const handleAccordionChange = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label)
  }

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('headingWrapper')}>
        {sectionHeading && (
          <Typography {...styles('sectionHeading')}>
            {sectionHeading}
          </Typography>
        )}
        <Typography {...styles('heading')}>{heading}</Typography>
      </Box>
      <Box {...styles('accordionWrapper')}>
        {items.map((accordion) => (
          <Box {...styles('accordion')} key={accordion.label}>
            <Accordion
              {...accordion}
              key={accordion.label}
              isOpen={openAccordion === accordion.label}
              onChange={() => handleAccordionChange(accordion.label)}
              customStyles={{
                drawer: styles('drawer').sx,
                toggleWrapper: styles('toggleWrapper').sx,
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
