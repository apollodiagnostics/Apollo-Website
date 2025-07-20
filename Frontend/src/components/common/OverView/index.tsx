'use client'

import { useState } from 'react'
import { Box, Collapse, Typography, useMediaQuery } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'
import { Button } from '../Button'
import { HtmlPurifier } from '../HtmlPurifier'
import { Image, ImageProps } from '../Image'

export type OverViewData = {
  heading: string
  description: string
  image?: ImageProps | null
}

type OverViewProps = OverViewData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function OverView({
  heading,
  description,
  image,
  customStyles,
}: OverViewProps) {
  const styles = getStyles(defaultStyles, customStyles)
  const [desState, setDescState] = useState(false)
  const isMobile = useMediaQuery('(max-width:900px)')

  return (
    <Box {...styles('mainWrapper')}>
      <Box {...styles('descriptionWrapper')}>
        <Box {...styles('headingWrapper')}>
          <Typography {...styles('heading')}>{heading}</Typography>
        </Box>
        <Box {...styles('description')}>
          <Collapse in={desState} collapsedSize={isMobile ? 100 : 275}>
            <HtmlPurifier html={description} />
          </Collapse>
          {isMobile && (
            <Button
              variant="text"
              label={desState ? 'Read less' : 'Read more'}
              onClick={() => setDescState((prev) => !prev)}
            />
          )}
        </Box>
      </Box>
      {image && (
        <Box {...styles('imageWrapper')}>
          <Image src={image.src} alt={image.alt} fill />
        </Box>
      )}
    </Box>
  )
}
