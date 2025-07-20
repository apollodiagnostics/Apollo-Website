import { Box, Typography } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type CentreDetailsData = {
  heading: string
  subHeading?: string
  children?: React.ReactNode
}

type CentreDetailsProps = CentreDetailsData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function CentreDetailsCard({
  heading,
  subHeading,
  children,
  customStyles,
}: CentreDetailsProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('centreDetailsCard')}>
        <Box {...styles('headingWrapper')}>
          <Typography {...styles('heading')}>{heading}</Typography>
          {subHeading && (
            <Typography {...styles('subHeading')}>({subHeading})</Typography>
          )}
        </Box>
        {children}
      </Box>
    </Box>
  )
}
