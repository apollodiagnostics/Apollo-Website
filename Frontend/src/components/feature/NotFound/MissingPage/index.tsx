'use client'

import { useRouter } from 'next/navigation'
import { Box, Typography } from '@mui/material'
import { Button, ButtonProps } from '@components/common'
import { Image, ImageProps } from '@components/common/Image'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type NotFoundProps = {
  image: ImageProps
  sectionHeading: string
  heading: string
  description: string
  homePageButton: ButtonProps
}

export function NotFound({
  image,
  sectionHeading,
  heading,
  description,
  homePageButton,
}: NotFoundProps) {
  const styles = getStyles(defaultStyles)
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('container')}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          customStyles={{ wrapper: styles('imageWrapper').sx }}
        />
        <Typography {...styles('sectionHeading')}>{sectionHeading}</Typography>
        <Typography {...styles('heading')}>{heading}</Typography>
        <Typography {...styles('description')}>{description}</Typography>
        <Box {...styles('buttonWrapper')}>
          <Button
            label={homePageButton.label}
            variant="contained"
            link={homePageButton.link}
            customStyles={{ button: styles('button').sx }}
          />
          <Button
            label="Back"
            variant="outlined"
            onClick={goBack}
            customStyles={{ button: styles('button').sx }}
          />
        </Box>
      </Box>
    </Box>
  )
}
