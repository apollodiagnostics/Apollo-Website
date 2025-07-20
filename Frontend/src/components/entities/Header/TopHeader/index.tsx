/* eslint-disable @typescript-eslint/no-unnecessary-condition */

'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import CallRoundedIcon from '@mui/icons-material/CallRounded'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Divider, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { InputData } from '@models'
import { HeaderData } from '@query/header/header.model'
import { Image, SearchBar, SearchSelect } from '@components/common'
import { getStyles } from '@utils/styles'
import { useUserState } from 'src/providers/login-state-management'
import defaultStyle from './styles'

type Props = HeaderData

export function TopHeader({
  topHeaderData: { locations, contact, logo, phoneNo },
}: Props) {
  const styles = getStyles(defaultStyle)
  const { addUserDetails, userDetails } = useUserState()

  const value = useMemo(() => {
    return locations.find(
      (location) => location?.value === userDetails?.cityId?.toString()
    )
  }, [locations, userDetails])

  // useEffect(() => {
  //   addUserDetails({
  //     ...userDetails,
  //     cityName: value?.label,
  //   })
  // }, [value])

  const handleLocationChange = (
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: InputData | null
  ) => {
    if (newInputValue && newInputValue.value) {
      if (userDetails)
        addUserDetails({
          ...userDetails,
          cityId: newInputValue.value.toString(),
          cityName: newInputValue.label,
        })
      else
        addUserDetails({
          cityId: newInputValue.value.toString(),
          cityName: newInputValue.label,
        })
    }
  }

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('contentWrapper')}>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            fill
            customStyles={{ wrapper: styles('image').sx }}
          />
        </Link>
        <Divider {...styles('divider')} orientation="vertical" />
        <Box {...styles('selectWrapper')}>
          <Image
            src="/images/location.svg"
            alt="location icon"
            customStyles={{ wrapper: styles('location').sx }}
            fill
          />
          <SearchSelect
            value={value}
            placeHolder="Search City"
            options={locations}
            onChange={handleLocationChange}
          />
        </Box>
        <Box {...styles('searchBar')}>
          <SearchBar customStyles={{ wrapper: styles('searchbar').sx }} />
        </Box>
        <Box {...styles('contactUsWrapper')}>
          <Box
            component="a"
            href={`tel:${phoneNo}`}
            {...styles('callWrapper')}
            aria-label={phoneNo}
          >
            <CallRoundedIcon {...styles('CallRoundedIcon')} />
          </Box>
          <Box
            component="a"
            aria-label="whatsapp calling icon"
            href={`https://api.whatsapp.com/send/?phone=${contact.whatsapp}&text=HELLO&type=phone_number&app_absent=0`}
            target="_blank"
            rel="noopener noreferrer"
            {...styles('whatsappWrapper')}
          >
            <WhatsAppIcon {...styles('WhatsAppIcon')} />
          </Box>
        </Box>
        <Box {...styles('homeCollectionContainer')}>
          <Image
            src="/images/homeCollectionImage.png"
            alt="collection"
            fill
            customStyles={{ wrapper: { width: '36px', height: '36px' } }}
          />
          <Box {...styles('collectionWrapper')}>
            <Typography {...styles('homeCollection')}>
              Home Collection
            </Typography>
            <Typography
              {...styles('phoneNo')}
              component="a"
              href={`tel:${phoneNo}`}
            >
              {phoneNo}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
