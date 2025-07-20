'use client'

import { ImageProps } from 'next/image'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box, Typography } from '@mui/material'
import { Button, ButtonProps, Image } from '@components/common'
import { CustomStyles, getStyles } from '@utils/styles'
import useDateFormatter from 'src/hooks/dateFormatter'
import defaultStyle, { StylesClassNames } from './styles'

type DescriptionSection = {
  date: string
  time: string
  mainHeading: string
  heading?: string
  description: string
  buttonProps: ButtonProps
}

export type BlogsOverviewData = {
  image: ImageProps
  descriptonSection: DescriptionSection | null
}

type BlogsOverviewProps = BlogsOverviewData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function BlogsOverview({
  image,
  descriptonSection,
  customStyles,
}: BlogsOverviewProps) {
  const styles = getStyles(defaultStyle, customStyles)
  const formattedDate = useDateFormatter(descriptonSection?.date)
  return (
    <Box {...styles('wrapper')}>
      {descriptonSection?.mainHeading ? (
        <>
          <Box {...styles('imageWrapper')}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              customStyles={{ wrapper: styles('image').sx }}
            />
          </Box>
          <Box {...styles('descriptionWrapper')}>
            <Box {...styles('headingSectionWrapper')}>
              <Box {...styles('labelWrapper')}>
                <Typography {...styles('label')}>{formattedDate}</Typography>
                <Typography {...styles('label')}>
                  {descriptonSection.time}
                </Typography>
              </Box>
              <Box {...styles('headingWrapper')}>
                <Typography {...styles('mainHeading')}>
                  {descriptonSection.mainHeading}
                </Typography>
                <Typography {...styles('heading')}>
                  {descriptonSection.heading}
                </Typography>
              </Box>
            </Box>
            <Box {...styles('description')}>
              {descriptonSection.description}
            </Box>
            <Box>
              <Button
                label={descriptonSection.buttonProps.label}
                link={descriptonSection.buttonProps.link}
                icon={<ArrowRightAltIcon />}
                variant="text"
              />
            </Box>
          </Box>
        </>
      ) : (
        <Box {...styles('mainHeading')}>No Result Found</Box>
      )}
    </Box>
  )
}
