import { useEffect, useRef, useState } from 'react'
import { Box, SxProps } from '@mui/material'
import Slide from '@mui/material/Slide'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

type CountDownProps = {
  numbers: string
  direction: 'up' | 'down'
  timeout?: number
  startTransition: boolean
  customStyles?: SxProps
}

type Props = CountDownProps & {
  customStyles?: CustomStyles<StylesClassNames>
}

function CountDown({
  numbers,
  direction,
  timeout = 1000,
  startTransition,
  customStyles,
}: Props) {
  const styles = getStyles(defaultStyles, customStyles)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    if (startTransition && !isCompleted) {
      setIsCompleted(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTransition])

  return (
    <Box ref={containerRef} {...styles('wrapper')}>
      <Slide
        direction={direction}
        timeout={timeout}
        in={isCompleted}
        easing="linear"
        container={containerRef.current}
      >
        <Box
          {...styles('numberWrapper')}
          sx={{
            bottom: direction === 'up' ? 'unset' : -42 * (numbers.length - 1),
            top: direction === 'up' ? -42 * (numbers.length - 1) : 'unset',
          }}
        >
          {/* {numbers.map((item) => ( */}
          <Box {...styles('number')}>{numbers}</Box>
          {/* ))} */}
        </Box>
      </Slide>
    </Box>
  )
}

export default CountDown
