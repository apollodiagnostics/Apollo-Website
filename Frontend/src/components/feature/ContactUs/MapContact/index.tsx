import CallIcon from '@mui/icons-material/Call'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { Box, Link, Typography } from '@mui/material'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type MapContactProps = {
  address: {
    officeCategory: string
    officeName: string
    location: string
  }
  contact: {
    heading: string
    email: string
    phone: string
  }
  mapSrc: string
}

export function MapContact({ address, contact, mapSrc }: MapContactProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box component="iframe" {...styles('mapContainer')} src={mapSrc} />
      <Box {...styles('detailContainer')}>
        <Box {...styles('container')}>
          <Typography {...styles('heading')}>
            {address.officeCategory}
          </Typography>
          <Typography {...styles('addressName')}>
            {address.officeName}
          </Typography>
          <Typography {...styles('location')}>{address.location}</Typography>
        </Box>
        <Box {...styles('container')}>
          <Typography {...styles('heading')}>{contact.heading}</Typography>
          <Link href={`mailto:${contact.email}`} {...styles('icons')}>
            <EmailOutlinedIcon {...styles('iconWrapper')} />
            <Typography {...styles('contact')}>{contact.email}</Typography>
          </Link>
          <Link href={`tel:${contact.phone}`} {...styles('icons')}>
            <CallIcon {...styles('iconWrapper')} />
            <Typography {...styles('contact')}>{contact.phone}</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default MapContact
