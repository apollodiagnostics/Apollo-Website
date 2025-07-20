import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100vw',
    margin: 'auto',
    backgroundColor: 'custom.lightPink',
  },
  innerWrapper: {
    padding: { xs: '30px 6vw', md: '3vw 6vw' },
    margin: 'auto',
    maxWidth: '1590px',
    display: 'flex',
    flexDirection: 'column',
    gap: '44px',
    transition: '1s',
  },
  packagesWrapper: {
    width: '100%',
    display: 'flex',
    gap: '24px 36px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  infoContainer: {
    alignItems: 'center',
  },
  headerWrapper: {
    justifyContent: 'center',
  },
  footWrapper: {
    margin: 'auto',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
