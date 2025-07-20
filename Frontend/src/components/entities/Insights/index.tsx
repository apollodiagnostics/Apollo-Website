import { Box, Typography, Grid } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type InsightsData = {
  sectionHeading: string
  heading?: string
  data: {
    dataHeading: string
    description?: string
  }[]
}

type InsightsProps = InsightsData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function Insights({
  sectionHeading,
  heading,
  data,
  customStyles,
}: InsightsProps) {
  const styles = getStyles(defaultStyles, customStyles)
  const chunkSize = 3
  const chunkedData = []

  for (let i = 0; i < data.length; i += chunkSize) {
    chunkedData.push(data.slice(i, i + chunkSize))
  }

  return (
    <Box
      {...styles('wrapper', {
        backgroundImage: `url('/images/insightsBg.png')`,
      })}
    >
      <Box {...styles('headingWrapper')}>
        <Typography {...styles('sectionHeading')}>{sectionHeading}</Typography>
        <Typography {...styles('heading')}>{heading}</Typography>
      </Box>

      {chunkedData.map((chunk) => (
        <Grid
          container
          spacing={3}
          {...styles('gridContainer')}
          key={chunk[0].dataHeading}
        >
          {chunk.map((item) => (
            <Grid item xs={4} sm={4} md={2.3} key={item.description}>
              <Box {...styles('card')}>
                <Typography {...styles('cardHeading')}>
                  {item.dataHeading}
                </Typography>
                <Typography {...styles('cardDescription')}>
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  )
}
