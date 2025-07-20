import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    padding: { xs: '6vw', lg: '4vw' },
    gap: '32px',
    margin: 'auto',
    maxWidth: '1590px',
  },
  sectionHeading: {
    backgroundColor: 'secondary.light',
    color: 'secondary.main',
    width: '143px',
    height: '30px',
    borderRadius: '33px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeadingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    minWidth: { md: '516px' },
  },
  descriptionWrapper: {
    maxWidth: { md: 'calc(100% - 493px)' },
  },
  description: {
    fontSize: '16px',
    fontWeight: '500',
    color: 'custom.green',
  },
  headingWrapper: {
    display: 'flex',
    maxWidth: '493px',
    flexDirection: 'column',
  },
  mainHeading: {
    fontSize: '36px',
    fontWeight: '700',
    color: 'custom.green',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '500',
    color: 'custom.green',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
