import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  tabWrapper: {
    width: '100%',
    bgcolor: 'common.white',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 1000,
    height: '70px',
    display: { xs: 'unset', lg: 'none' },
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  },
  icon: {
    height: '24px',
    width: '24px',
  },
  tab: {
    fontSize: '10px',
    whiteSpace: 'nowrap',
  },
  tubeIcon: {
    backgroundColor: 'transparent',
    height: '48px',
    width: '48px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
