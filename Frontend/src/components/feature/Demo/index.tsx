'use client'

import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useToggleState } from '@hooks'
import { useLaunchQuery, useLaunchesQuery } from '@query/launch'
import { Loader } from '@components/common'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StyleClassNames } from './styles'

export type DemoProps = {
  children?: React.ReactNode
  customStyles?: CustomStyles<StyleClassNames>
}

export function Demo({ children, customStyles }: DemoProps) {
  const styles = getStyles(defaultStyles, customStyles)
  const [state, toggleState] = useToggleState(false)
  const [launchId, setLaunchId] = useState('5eb87cd9ffd86e000604b32a')

  /**
   * For client side Fetching data using useSuspenseQuery hook
   */
  const { launches } = useLaunchesQuery()
  const { launchData } = useLaunchQuery(launchId)

  return (
    <Box {...styles('wrapper')}>
      <Button
        variant="contained"
        color={state ? 'primary' : 'secondary'}
        onClick={toggleState}
      >
        Toggle {state ? 'off' : 'on'}
      </Button>

      <Typography variant="h4">Selected Launch</Typography>
      <Box>{JSON.stringify(launchData)}</Box>

      <Box
        sx={{
          mt: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {launches.map((item) => (
          <Box
            sx={{
              bgcolor: 'custom.track',
              borderRadius: '6px',
              p: 1,
              cursor: 'pointer',
            }}
            key={item.id}
            onClick={() => setLaunchId(item.id)}
          >
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Box sx={{ color: 'primary.main' }}>{item.mission_name}</Box>
              <Box sx={{ opacity: 0.7 }}>{item.launch_year}</Box>
            </Box>
            <Box sx={{ p: 1 }}>{item.details}</Box>
          </Box>
        ))}
      </Box>

      <Loader loading>
        <Box {...styles('container')}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
          convallis augue. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Pellentesque accumsan quis lacus sit amet feugiat. Sed velit
          tortor, aliquet vel imperdiet et, pulvinar id erat. Cras tempus enim
          non nibh cursus, sed mollis lectus vehicula. Donec dolor nulla,
          ultrices ut mattis et, suscipit mattis nulla. Curabitur eu justo nisl.
          Maecenas diam enim, varius in lorem eget, volutpat facilisis sapien.
          Curabitur eu tempor arcu, eget tincidunt dui. Nullam id sem bibendum,
          mollis dui nec, semper neque. Nunc interdum dolor et nulla interdum
          molestie.
        </Box>
      </Loader>
      {children}
    </Box>
  )
}
