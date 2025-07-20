import * as React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import { HeaderData } from '@query/header/header.model'
import { DropDown } from '@components/common/DropDown'
import { Image } from '@components/common/Image'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

type Props = {
  headerData: HeaderData
}

export function MobileMenu({ headerData }: Props) {
  const styles = getStyles(defaultStyles)

  const [drawerState, setDrawerState] = React.useState(false)
  const handleDrawerToggle = () => {
    setDrawerState((prevState) => !prevState)
  }
  useEffect(() => {
    const drawerElement = document.querySelector('.drawer-content')
    if (drawerElement) {
      drawerElement.scrollTop = 0
    }
  }, [drawerState])

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        {...styles('iconButtonWrapper')}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        open={drawerState}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        anchor="left"
        {...styles('drawerMount')}
      >
        <Box {...styles('drawerWrapper')} className="drawer-content">
          <Box {...styles('drawerHeadComponent')}>
            <Link href="/" onClick={handleDrawerToggle}>
              <Image
                src={headerData.topHeaderData.logo}
                alt="logo"
                fill
                customStyles={{ wrapper: styles('image').sx }}
              />
            </Link>
            <CloseRoundedIcon
              onClick={handleDrawerToggle}
              sx={{ cursor: 'pointer' }}
            />
          </Box>
          <List>
            {Object.entries(headerData.mainHeaderData.headerWithMenu).map(
              ([title, options]) => (
                <DropDown
                  key={title}
                  title={title}
                  options={options}
                  onClick={handleDrawerToggle}
                  defaultState={!drawerState}
                />
              )
            )}
            {headerData.mainHeaderData.headerWithoutMenu.map((item) => (
              <Box {...styles('menuWrapper')} key={item.label}>
                <Link href={item.link} style={{ textDecoration: 'none' }}>
                  <Typography onClick={handleDrawerToggle} {...styles('label')}>
                    {item.label}
                  </Typography>
                </Link>
              </Box>
            ))}
            <Box
              {...styles('menuWrapper')}
              key={headerData.mainHeaderData.downloadReport.label}
            >
              <Link
                href={headerData.mainHeaderData.downloadReport.link}
                style={{ textDecoration: 'none' }}
              >
                <Typography onClick={handleDrawerToggle} {...styles('label')}>
                  {headerData.mainHeaderData.downloadReport.label}
                </Typography>
              </Link>
            </Box>
            <Box
              {...styles('menuWrapper')}
              key={headerData.mainHeaderData.blogs.label}
            >
              <Link
                href={headerData.mainHeaderData.blogs.link}
                style={{ textDecoration: 'none' }}
              >
                <Typography onClick={handleDrawerToggle} {...styles('label')}>
                  {headerData.mainHeaderData.blogs.label}
                </Typography>
              </Link>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  )
}
