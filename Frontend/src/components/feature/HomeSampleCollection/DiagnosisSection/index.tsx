import { Box, Typography } from '@mui/material'
import { HtmlPurifier, TimeLine, TimeLineData } from '@components/common'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyle, { StylesClassNames } from './styles'

export type DiagnosisSectionData = {
  heading: string
  description: string
  diagnosisStepHeading: string
  timeLineData: TimeLineData
}
export type DiagnosisSectionProps = DiagnosisSectionData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function DiagnosisSection({
  heading,
  description,
  diagnosisStepHeading,
  timeLineData,
  customStyles,
}: DiagnosisSectionProps) {
  const styles = getStyles(defaultStyle, customStyles)

  return (
    <Box {...styles('mainWrapper')}>
      <Box {...styles('descriptionWrapper')}>
        <Box {...styles('headingWrapper')}>
          <Typography {...styles('heading')}>{heading}</Typography>
        </Box>
        <HtmlPurifier
          html={description}
          customStyles={{ wrapper: styles('description').sx }}
        />
      </Box>
      <Box {...styles('diagonisStepsWrapper')}>
        <Box {...styles('headingWrapper')}>
          <Typography {...styles('heading')}>{diagnosisStepHeading}</Typography>
        </Box>
        <TimeLine
          {...timeLineData}
          customStyles={{ text: styles('timeContent').sx }}
        />
      </Box>
    </Box>
  )
}
