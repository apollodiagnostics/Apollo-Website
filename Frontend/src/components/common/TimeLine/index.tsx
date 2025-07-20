import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyle, { StylesClassNames } from './styles'
import { Image, ImageProps } from '../Image'

export type TimeLineData = {
  steps: TimeLineStepData[]
}
export type TimeLineStepData = {
  label: string
  image: ImageProps
}

type TimeLineProps = TimeLineData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function TimeLine({ customStyles, steps }: TimeLineProps) {
  const styles = getStyles(defaultStyle, customStyles)

  return (
    <Timeline {...styles('wrapper')} position="right">
      {steps.map((step, index) => {
        const isLastStep = index === steps.length - 1
        return (
          <TimelineItem key={step.label}>
            <TimelineSeparator>
              <TimelineDot {...styles('step')}>
                <Image
                  {...step.image}
                  customStyles={{ wrapper: styles('image').sx }}
                  fill
                />
              </TimelineDot>
              {!isLastStep && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent {...styles('text')}>{step.label}</TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}
