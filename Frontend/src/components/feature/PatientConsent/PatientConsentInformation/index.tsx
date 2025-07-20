'use client'

import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Accordion, AccordionData } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type PatientConsentInformationProps = {
  sectionHeading: string
  heading: string
  accordion: AccordionData[]
}

export function PatientConsentInformation({
  sectionHeading,
  heading,
  accordion,
}: PatientConsentInformationProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    accordion[0]?.label || ''
  )
  const styles = getStyles(defaultStyles)

  const handleAccordionChange = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label)
  }

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('headingWrapper')}>
        <Typography {...styles('sectionHeading')}>{sectionHeading}</Typography>
        <Typography {...styles('heading')}>{heading}</Typography>
      </Box>
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
