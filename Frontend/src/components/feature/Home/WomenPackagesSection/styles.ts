import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100vw',
    padding: { xs: '3vw 6vw', md: '62px 6vw', lg: '62px 4vw' },
    margin: 'auto',
    display: 'flex',
    maxWidth: '1590px',
    flexDirection: 'column',
    gap: { xs: '0px', md: '36px' },
    transition: '1s',
  },
  packagesWrapper: {
    width: '100%',
    display: 'flex',
    gap: '24px 36px',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
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
