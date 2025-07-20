// import { Box, Typography } from '@mui/material'
// import { CustomStyles, getStyles } from '@utils/styles'
// import defaultStyles, { StylesClassNames } from './styles'

// export type StatsSectionData = {
//   sectionHeading: string
//   heading?: string
//   data: {
//     dataHeading: string
//     description?: string
//   }[]
// }

// type StatsSectionProps = StatsSectionData & {
//   customStyles?: CustomStyles<StylesClassNames>
// }

// export function StatsSection({
//   sectionHeading,
//   heading,
//   data,
//   customStyles,
// }: StatsSectionProps) {
//   const styles = getStyles(defaultStyles, customStyles)

//   return (
//     <Box
//       {...styles('wrapper', {
//         backgroundImage: `url('/images/statsBg.webp')`,
//       })}
//     >
//       <Box {...styles('headingWrapper')}>
//         <Typography {...styles('sectionHeading')}>{sectionHeading}</Typography>
//         <Typography {...styles('heading')}>{heading}</Typography>
//       </Box>
//       <Box {...styles('cardWrapper')}>
//         {data.map((stats) => (
//           <Box {...styles('card')}>
//             <Typography {...styles('cardHeading')}>
//               {stats.dataHeading}
//             </Typography>
//             <Typography {...styles('cardDescription')}>
//               {stats.description}
//             </Typography>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   )
// }

'use client'

import { useEffect, useRef, useState } from 'react'
import { Box, Typography, Grow } from '@mui/material'
import CountDown from '@components/common/CountDown'
import { CustomStyles, getStyles } from '@utils/styles'
import useInView from 'src/hooks/in-view'
import defaultStyles, { StylesClassNames } from './styles'

export type StatsSectionData = {
  sectionHeading: string
  heading?: string
  data: {
    dataHeading: string
    description?: string
  }[]
}

type StatsSectionProps = StatsSectionData & {
  customStyles?: CustomStyles<StylesClassNames>
}

// const getRandomDirection = (): 'up' | 'down' => {
//   const directions: ('up' | 'down')[] = ['up', 'down']
//   return directions[Math.floor(Math.random() * directions.length)]
// }

export function StatsSection({
  sectionHeading,
  heading,
  data,
  customStyles,
}: StatsSectionProps) {
  const styles = getStyles(defaultStyles, customStyles)
  const [inView] = useInView('stats-section')
  const containerRef = useRef(null)
  const [dir, setDir] = useState<'up' | 'down'>('up')

  useEffect(() => {
    const directions: ('up' | 'down')[] = ['up', 'down']
    setDir(directions[Math.floor(Math.random() * directions.length)])
  }, [])

  return (
    <Box
      {...styles('wrapper', {
        backgroundImage: `url('/images/statsBg.webp')`,
      })}
      ref={containerRef}
      id="stats-section"
    >
      <Box {...styles('headingWrapper')}>
        <Typography {...styles('sectionHeading')}>{sectionHeading}</Typography>
        <Typography {...styles('heading')}>{heading}</Typography>
      </Box>
      <Box {...styles('cardWrapper')}>
        {data.map((stats) => (
          <Grow
            key={stats.dataHeading}
            in={inView}
            style={{ transformOrigin: '0 0 0' }}
            timeout={2000}
          >
            <Box {...styles('card')}>
              {/* <Typography {...styles('cardHeading')}>
                {stats.dataHeading}
              </Typography> */}
              <Box>
                <CountDown
                  numbers={stats.dataHeading}
                  direction={dir}
                  startTransition={inView}
                  {...styles('cardHeading')}
                />
              </Box>
              <Typography {...styles('cardDescription')}>
                {stats.description}
              </Typography>
            </Box>
          </Grow>
        ))}
      </Box>
    </Box>
  )
}
