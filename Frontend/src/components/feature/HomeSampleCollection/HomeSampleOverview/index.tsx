import { Box } from '@mui/material'
import { Image } from '@components/common'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyle, { StylesClassNames } from './styles'

export type HomeSampleOverviewProps = {
  customStyles?: CustomStyles<StylesClassNames>
}

export function HomeSampleOverview({ customStyles }: HomeSampleOverviewProps) {
  const styles = getStyles(defaultStyle, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('overviewImageWrapper')}>
        <Image
          src="/images/homeCollection.png"
          alt="overview"
          fill
          customStyles={{ wrapper: styles('image').sx }}
        />
      </Box>
    </Box>
  )
}
