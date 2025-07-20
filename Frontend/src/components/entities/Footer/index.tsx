'use client'

import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import DraftsIcon from '@mui/icons-material/Drafts'
import { Box, Link, Typography } from '@mui/material'
import { citySlugPlaceholder, defaultCity, LinkData } from '@models'
import { Button, ButtonProps, Image } from '@components/common'
import { createSlugStringFromSlugData } from '@utils/common'
import { getStyles } from '@utils/styles'
import { useUserState } from 'src/providers/login-state-management'
import defaultStyles from './styles'

export type FooterProps = {
  contactInfo: ContactInfo
  actionLinks: ActionLinks[]
  backgroundImageSrc: string
  disclaimer: string
  partners: {
    heading: string
    description: string
    button: ButtonProps
  }
}

export type ContactInfo = {
  heading: string
  email: string[]
}

export type ActionLinks = {
  heading: string
  action: LinkData[]
}

export function Footer({
  actionLinks,
  contactInfo,
  partners,
  disclaimer,
  backgroundImageSrc,
}: FooterProps) {
  const styles = getStyles(defaultStyles)
  const moveToTop = () => {
    globalThis.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

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
    <Box
      {...styles('wrapper', {
        backgroundImage: `url('${backgroundImageSrc}')`,
      })}
    >
      <Box {...styles('innnerContainer')}>
        <Box {...styles('contactWrapper')}>
          <Box {...styles('partners')}>
            <Typography {...styles('partnersHeading')}>
              {partners.heading}
            </Typography>
            <Box component="p" {...styles('partnerDescription')}>
              {partners.description}
            </Box>
            <Button
              label="Know More"
              variant="contained"
              link={partners.button.link}
              customStyles={{ button: styles('knowMore').sx }}
            />
          </Box>
          <Box {...styles('contact')}>
            <Typography {...styles('emailheading')}>
              {contactInfo.heading}
            </Typography>
            {contactInfo.email.map((item) => (
              <Link
                key={item}
                href={`mailto:${contactInfo}`}
                {...styles('emailWrapper')}
                aria-label={item}
              >
                <DraftsIcon />
                <Typography {...styles('email')}>{item}</Typography>
              </Link>
            ))}
          </Box>
        </Box>
        <Box {...styles('mainFrame')}>
          {actionLinks.map((item) => {
            return (
              <Box {...styles('innerComponent')} key={item.heading}>
                <Typography className="heading">{item.heading}</Typography>
                {item.action.map((item) => {
                  return (
                    <Box {...styles('actions')} key={item.label}>
                      <Link
                        // component="a"
                        href={replaceCitySlug(item.link)}
                        {...styles('actionLinks')}
                        aria-label={item.link}
                      >
                        {item.image && (
                          <Image
                            src={item.image.src}
                            fill
                            alt="mediaLinks"
                            customStyles={{ wrapper: defaultStyles.icons }}
                          />
                        )}
                      </Link>
                      <Link
                        key={item.label}
                        // component="a"
                        href={replaceCitySlug(item.link)}
                        {...styles('actionLabel')}
                        aria-label={item.label}
                      >
                        <Box component="p" className="dullText">
                          {item.label}
                        </Box>
                      </Link>
                    </Box>
                  )
                })}
              </Box>
            )
          })}
        </Box>
      </Box>
      <Box {...styles('bottomSectionLastPart')} onClick={moveToTop}>
        <Box {...styles('arrowUp')}>
          <ArrowUpwardIcon {...styles('icon')} />
        </Box>
        <Typography variant="body1" {...styles('bottomSectionItemText')}>
          Move To Top
        </Typography>
      </Box>
      <Box {...styles('disclaimerWrapper')}>
        <Box component="p" {...styles('disclaimerText')}>
          {disclaimer}
        </Box>
      </Box>
    </Box>
  )
}
