import {
  timelineItemClasses,
  timelineDotClasses,
  timelineConnectorClasses,
} from '@mui/lab'
import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    [`& .${timelineItemClasses.root}:before`]: {
      flex: 0,
      padding: 0,
    },
    [`& .${timelineDotClasses.root}`]: {
      margin: 'unset',
      boxShadow: 'none',
    },
    [`& .${timelineConnectorClasses.root}`]: {
      backgroundColor: 'primary.main',
      opacity: '70%',
      height: '20px',
    },
    '.mui-1ms7hib-MuiTimelineItem-root': {
      alignItems: { xs: 'center', md: 'unset' },
      flexDirection: { xs: 'column', md: 'row' },
    },
  },
  text: {
    fontWeight: '400',
    fontSize: { xs: '14px', md: '20px' },
    textAlign: { xs: 'center', md: 'unset' },
  },
  step: {
    backgroundColor: 'primary.light',
    color: 'primary.main',
    width: '48px',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '24px',
    height: '24px',
    background: 'none',
    alignContent: 'center',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
