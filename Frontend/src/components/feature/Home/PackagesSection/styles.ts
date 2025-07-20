import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    backgroundColor: 'custom.lightPink',
    display: 'flex',
    justifyContent: 'center',
  },
  wrapper: {
    padding: { xs: '30px 6vw', md: '62px 6vw', lg: '62px 4vw' },
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '24px', md: '44px' },
    maxWidth: '1590px',

    transition: '1s',
    // marginTop: { xs: '0px', md: '64px' }, // the space require as per figma , satisfied by its above element
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
  button: {
    fontSize: { md: '16px' },
    padding: { md: '12px 16px' },
    height: { md: '48px' },
    width: { lg: '278px' },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
