'use client'

import React, { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import PackageIcon from '@mui/icons-material/AllInbox'
import ReportIcon from '@mui/icons-material/Assignment'
import BiotechIcon from '@mui/icons-material/Biotech'
import HomeIcon from '@mui/icons-material/Home'
import { Tabs, Tab, Box } from '@mui/material'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export function PhoneTabs() {
  const styles = getStyles(defaultStyles)
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Ensure this code runs only on the client side
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient) {
      switch (pathname) {
        case '/':
          setActiveTab(0)
          break
        case '/test-booking':
          setActiveTab(1)
          break
        case '/packages-booking':
          setActiveTab(2)
          break
        case '/download-report':
          setActiveTab(3)
          break
        default:
          setActiveTab(0)
      }
    }
  }, [pathname, isClient])

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
    if (isClient) {
      switch (newValue) {
        case 0:
          void router.push('/')
          break
        case 1:
          void router.push('/test-booking')
          break
        case 2:
          void router.push('/packages-booking')
          break
        case 3:
          void router.push('/download-report')
          break
        default:
          void router.push('/home')
      }
    }
  }

  if (!isClient) {
    return null
  }

  return (
    <Box sx={styles('tabWrapper').sx}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="phone tabs"
      >
        <Tab
          icon={<HomeIcon sx={styles('icon').sx} />}
          label="Home"
          sx={{
            ...styles('tab').sx,
            color: activeTab === 0 ? 'primary.main' : 'text.secondary',
          }}
        />
        <Tab
          icon={<BiotechIcon sx={styles('icon').sx} />}
          // icon={
          //   <IconTag
          //     icon={{ src: '/images/blood-tube.png', alt: 'tube icon' }}
          //     customStyles={{ wrapper: styles('tubeIcon').sx }}
          //   />
          // }
          label="Book a test"
          sx={{
            ...styles('tab').sx,
            color: activeTab === 1 ? 'primary.main' : 'text.secondary',
          }}
        />
        <Tab
          icon={<PackageIcon sx={styles('icon').sx} />}
          label="Packages"
          sx={{
            ...styles('tab').sx,
            color: activeTab === 2 ? 'primary.main' : 'text.secondary',
          }}
        />
        <Tab
          icon={<ReportIcon sx={styles('icon').sx} />}
          label="Reports"
          sx={{
            ...styles('tab').sx,
            color: activeTab === 3 ? 'primary.main' : 'text.secondary',
          }}
        />
      </Tabs>
    </Box>
  )
}
