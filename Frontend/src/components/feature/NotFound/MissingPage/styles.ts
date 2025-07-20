import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: '3vw 6vw',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: '24px',
    width: '1204px',
    backgroundColor: 'common.white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: { xs: '18px', md: '24px' },
  },
  heading: {
    textAlign: 'center',
    fontSize: { xs: '24px', md: '36px' },
    fontWeight: '700',
    lineHeight: { md: '54px' },
    color: 'custom.green',
  },
  sectionHeading: {
    color: 'primary.main',
    fontSize: { xs: '18px', md: '24px' },
    fontWeight: '700',
    lineHeight: '33px',
  },
  description: {
    textAlign: 'center',
    maxWidth: '693px',
    color: 'custom.lightSilver',
    fontSize: { xs: '12px', md: '16px' },
    fontWeight: '500',
    lineHeight: '23px',
  },
  imageWrapper: {
    width: '240px',
    height: '240px',
  },
  buttonWrapper: {
    width: '328px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
  },
  button: {
    width: { xs: '132px', md: '152px' },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
