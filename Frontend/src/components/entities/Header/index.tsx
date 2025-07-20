'use client'

import * as React from 'react'
import Link from 'next/link'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
// import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Badge, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { citySlugPlaceholder, defaultCity } from '@models'
import { HeaderData } from '@query/header'
import { Image } from '@components/common/Image'
import { Menu } from '@components/common/Menu'
import { createSlugStringFromSlugData } from '@utils/common'
import { getStyles } from '@utils/styles'
import { useCart } from 'src/providers/cart-management'
import { useDrawerState } from 'src/providers/drawer-state-management'
import { useUserState } from 'src/providers/login-state-management'
import { MobileMenu } from './MobileHeader'
import { TopHeader } from './TopHeader'
import defaultStyles from './styles'

type Props = HeaderData

export function Header({ mainHeaderData, topHeaderData }: Props) {
  const styles = getStyles(defaultStyles)
  const { toggleDrawerState, handleNextDrawer } = useDrawerState()
  const { cartItems } = useCart()
  const { userDetails } = useUserState()

  function replaceCitySlug(link: string) {
    if (link.includes(citySlugPlaceholder)) {
      return link.replace(
        citySlugPlaceholder,
        createSlugStringFromSlugData(
          userDetails?.cityName || defaultCity.name,
          userDetails?.cityId || defaultCity.id
        )
      )
    }
    return link
  }

  return (
    <>
      <TopHeader
        topHeaderData={topHeaderData}
        mainHeaderData={mainHeaderData}
      />
      <Box {...styles('mainWrapper')}>
        <Box component="nav" {...styles('wrapper')}>
          <Box {...styles('buttonWrapper')}>
            <MobileMenu headerData={{ mainHeaderData, topHeaderData }} />
            <Link href="/" aria-label="image">
              <Image
                src="/images/logo.png"
                alt="logo"
                customStyles={{
                  wrapper: styles('logo').sx,
                }}
                fill
              />
            </Link>
          </Box>
          <Box {...styles('navListWrapper')}>
            {Object.entries(mainHeaderData.headerWithMenu).map(
              ([title, options]) => (
                <Menu
                  key={title}
                  title={title}
                  options={options}
                  customStyles={{ button: defaultStyles.menu }}
                />
              )
            )}
            {mainHeaderData.headerWithoutMenu.map((item) => (
              <Link
                href={replaceCitySlug(item.link)}
                key={item.label}
                style={{ textDecoration: 'none', height: '100%' }}
              >
                <Typography key={item.label} {...styles('label')}>
                  {item.label}
                </Typography>
              </Link>
            ))}

            <Box {...styles('downloadWrapper')}>
              <Link
                href={replaceCitySlug(mainHeaderData.downloadReport.link)}
                style={{
                  display: 'flex',
                  gap: '9px',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <FileDownloadOutlinedIcon
                  {...styles('fileDownloadOutlinedIcon')}
                />
                <Typography {...styles('downloadButton')}>
                  {mainHeaderData.downloadReport.label}
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box {...styles('iconsWrapper')}>
            {!!cartItems.length && (
              <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartOutlinedIcon
                  {...styles('ShoppingCartOutlinedIcon')}
                  onClick={toggleDrawerState}
                />
              </Badge>
            )}

            {userDetails?.accessToken ? (
              // <Link href={`/profile/${userDetails.profileId}`}>
              //   <PersonIcon {...styles('PersonIcon')} />
              // </Link>
              <Box>
                {mainHeaderData.profiles && (
                  <Menu
                    title=""
                    options={mainHeaderData.profiles}
                    icon={<PersonIcon />}
                    customStyles={{
                      button: { height: '50px' },
                      options: styles('profileOption').sx,
                    }}
                  />
                )}
              </Box>
            ) : (
              <PersonIcon
                {...styles('loginIcon')}
                onClick={() => {
                  toggleDrawerState()
                  handleNextDrawer()
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  )
}
