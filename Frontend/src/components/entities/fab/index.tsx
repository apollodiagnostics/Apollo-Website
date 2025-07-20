'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Fab, Box, Typography } from '@mui/material'
import { IconTag } from '@components/common'
import { ImageProps } from '@components/common/Image'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type FabType = {
  icon: ImageProps
  heading: string
  description?: string
}

export function CustomFab() {
  const [prescriptionHover, setPrescriptionHover] = useState(false)
  const [callHover, setCallHover] = useState(false)
  const pathName = usePathname()
  const fabExceptionUrls = ['/cart']

  const handlePrescriptionHover = () => {
    setPrescriptionHover(true)
  }

  const handlePrescriptionLeave = () => {
    setPrescriptionHover(false)
  }
  const handleCallHover = () => {
    setCallHover(true)
  }
  const handleCallLeave = () => {
    setCallHover(false)
  }

  const handleClick = () => {
    // window.open('https://wa.me/number', '_blanck')
  }
  const styles = getStyles(defaultStyles)

  if (fabExceptionUrls.includes(pathName)) return null

  return (
    <Box sx={styles('fabWrapper').sx}>
      <Box
        sx={{ display: 'flex' }}
        onMouseEnter={handlePrescriptionHover}
        onMouseLeave={handlePrescriptionLeave}
      >
        <Box
          component="a"
          href="/upload-prescription"
          sx={{
            ...styles('infoWrapper').sx,
            width: prescriptionHover ? { xs: '180px', md: '230px' } : '0px',
            padding: prescriptionHover ? { xs: '0px', md: '20px' } : '0px',
          }}
        >
          <Typography
            sx={{
              ...styles('info').sx,
              fontWeight: '700',
            }}
          >
            Have a prescription ?
          </Typography>
        </Box>
        <Fab sx={styles('fab').sx} onClick={handleClick}>
          <IconTag
            icon={{ src: '/images/prescription.png', alt: 'prescription icon' }}
            customStyles={{
              wrapper: {
                height: { xs: '48px', md: '56px' },
                width: { xs: '48px', md: '56px' },
                backgroundColor: 'custom.darkPink',
              },
            }}
          />
        </Fab>
      </Box>
      {/* whatsapp  */}
      <Box
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
        onMouseEnter={handleCallHover}
        onMouseLeave={handleCallLeave}
      >
        <Box
          component="a"
          href="tel:040-4444-2424"
          target="_blank"
          sx={{
            ...styles('infoWrapper').sx,
            width: callHover ? { xs: '180px', md: '230px' } : '0px',
            padding: callHover ? { xs: '0px', md: '20px' } : '0px',
          }}
        >
          <Typography sx={{ ...styles('info').sx }}>Call Us</Typography>
          <Typography
            sx={{
              ...styles('info').sx,
              fontWeight: '700',
            }}
          >
            040-4444-2424
          </Typography>
        </Box>
        <Fab sx={styles('fab').sx} onClick={handleClick}>
          <IconTag
            icon={{ src: '/images/feature3.png', alt: 'call icon' }}
            customStyles={{
              wrapper: {
                height: { xs: '48px', md: '56px' },
                width: { xs: '48px', md: '56px' },
                backgroundColor: 'custom.darkPink',
              },
            }}
          />
        </Fab>
      </Box>
    </Box>
  )
}
