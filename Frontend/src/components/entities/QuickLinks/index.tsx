import { Fragment } from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { LinkData } from '@models'
import { CentreDetailsCard } from '@components/common/CentreDetailsCard'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyle, { StylesClassNames } from './styles'

export type QuickLinksData = {
  quickLinks: {
    heading: string
    links: LinkData[]
  }[]
}

type Props = QuickLinksData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function QuickLinks({ quickLinks, customStyles }: Props) {
  const styles = getStyles(defaultStyle, customStyles)

  return (
    <Box {...styles('container')}>
      {quickLinks.map((item) => (
        <CentreDetailsCard
          heading={item.heading}
          key={item.heading}
          customStyles={{
            wrapper: styles('wrapper').sx,
            headingWrapper: styles('headingWrapper').sx,
          }}
        >
          <Box {...styles('mainWrapper')}>
            {item.links.map((item, index) => (
              <Fragment key={item.label}>
                <Link
                  href={item.link}
                  style={{ textDecoration: 'none', color: '#033B49' }}
                >
                  <Typography {...styles('label')}>{item.label}</Typography>
                </Link>
                {index !== item.link.length - 1 && (
                  <Typography>{' / '}</Typography>
                )}
              </Fragment>
            ))}
          </Box>
        </CentreDetailsCard>
      ))}
    </Box>
  )
}
