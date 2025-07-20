'use client'

import { useState, type MouseEventHandler } from 'react'
import { Box, Button } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useLocale } from 'next-intl'
import { AppConfig } from '@config'
import { usePathname, useRouter } from '@libs/i18n'

export function InternationalizationSwitch() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClickListItem: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const handleChange = (value: string) => {
    setAnchorEl(null)
    router.push(pathname, { locale: value })
    router.refresh()
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickListItem}
        variant="outlined"
      >
        {locale}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          role: 'listbox',
        }}
      >
        {AppConfig.locales.map((value) => (
          <MenuItem
            key={value}
            selected={value === locale}
            onClick={() => handleChange(value)}
          >
            {value}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
