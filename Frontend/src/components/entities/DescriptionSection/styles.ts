import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    padding: { xs: '3vw 6vw', md: '2vw 6vw', lg: '2vw 4vw' },
    gap: { md: '32px' },
    maxWidth: '1590px',
    margin: 'auto',
  },
  sectionHeading: {
    backgroundColor: 'secondary.light',
    color: 'secondary.main',
    width: 'fit-content',
    padding: { xs: '6px', md: '16px' },
    height: { md: '30px' },
    borderRadius: '33px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
  },
  sectionHeadingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '16px', md: '32px' },
    minWidth: { md: '516px' },
  },
  descriptionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: { md: '32px' },
  },
  description: {
    fontSize: { xs: '12px', md: '16px' },
    fontWeight: '500',
    color: 'custom.green',
  },
  headingWrapper: {
    display: 'flex',
    maxWidth: '493px',
    flexDirection: 'column',
  },
  mainHeading: {
    fontSize: { xs: '23px', md: '36px' },
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
