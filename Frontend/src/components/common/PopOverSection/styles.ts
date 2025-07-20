import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100vw',
    position: 'relative',
    height: 'fit-content',
    padding: '6vw',
  },
  heading: {
    fontSize: { xs: '16px', lg: '24px' },
    fontWeight: { xs: '800', lg: '700' },
    color: 'custom.bluishBlack',
    marginBottom: '16px',
  },
  inputLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  popOverSection: {
    left: { xs: 'unset', lg: '9vw' },
    width: '88vw',
    padding: '24px',
    backgroundColor: 'common.white',
    borderRadius: '24px',
    minHeight: '176px',
    position: { lg: 'absolute' },
    top: '-20px',
    margin: 'auto',
    zIndex: 10,
    boxShadow: '0px 1px 10.8px 1px #76767630',
  },
  childrenWrapper: {
    width: '100%',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
