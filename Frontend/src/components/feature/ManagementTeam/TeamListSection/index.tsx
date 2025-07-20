import React from 'react'
import { ImageProps } from 'next/image'
import { Box, Typography } from '@mui/material'
import { Image } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type TeamListSectionData = {
  team: {
    image: ImageProps
    name: string
    designation: string
    emailId: string
  }[]
}

export function TeamListSection({ team }: TeamListSectionData) {
  const styles = getStyles(defaultStyle)
  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('innerWrapper')}>
        <Box {...styles('cardWrapper')}>
          {team.map((item) => (
            <Box {...styles('card')} key={item.name}>
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                customStyles={{ wrapper: styles('image').sx }}
              />
              <Typography {...styles('name')}>{item.name}</Typography>
              <Typography {...styles('designation')}>
                {item.designation}
              </Typography>
              <Typography {...styles('email')}>{item.emailId}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
