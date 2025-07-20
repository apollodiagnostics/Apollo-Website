import React from 'react'
import { Box } from '@mui/material'
import { ImageType } from '@models'
import {
  Image,
  SectionHeader,
  SectionHeaderData,
  TimeLine,
  TimeLineData,
} from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type TimeLineSectionProps = SectionHeaderData & {
  timeLineData: TimeLineData
  image: ImageType
}

export function TimeLineSection({
  image,
  timeLineData,
  button,
  heading,
  sectionHeading,
}: TimeLineSectionProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('mainWrapper')}>
      <Box {...styles('wrapper')}>
        <SectionHeader
          heading={heading}
          button={button}
          sectionHeading={sectionHeading}
        />
        <Box {...styles('infoWrapper')}>
          <TimeLine {...timeLineData} />
          <Image
            {...image}
            customStyles={{ wrapper: styles('image').sx }}
            fill
          />
        </Box>
      </Box>
    </Box>
  )
}
