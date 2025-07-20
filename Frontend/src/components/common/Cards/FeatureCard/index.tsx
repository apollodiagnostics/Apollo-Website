import React from 'react'
import Link from 'next/link'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import { Box, Typography } from '@mui/material'
import { ImageType } from '@models'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'
import { IconTag } from '../../IconTag'

export type FeatureCardData = {
  icon?: ImageType
  heading?: string
  description?: string
  link: string
  useAnchor?: boolean
}

type FeatureCardProps = FeatureCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function FeatureCard({
  customStyles,
  icon,
  heading,
  description,
  link,
  useAnchor = false,
}: FeatureCardProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')} component={useAnchor ? 'a' : Link} href={link}>
      <Box {...styles('container')}>
        {icon && <IconTag icon={icon} />}

        <Box {...styles('infoContainer')}>
          <Typography variant="body2" {...styles('heading')}>
            {heading}
          </Typography>
          <Typography variant="body1" {...styles('description')}>
            {description}
          </Typography>
        </Box>
      </Box>
      <KeyboardArrowRightRoundedIcon {...styles('nextIcon')} />
    </Box>
  )
}
