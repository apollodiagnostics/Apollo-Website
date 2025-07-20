import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: { xs: '3vw 6vw', lg: '2vw 4vw' },
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1590px',
    margin: 'auto',
    gap: '32px',
  },
  headingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '33px',
  },
  sectionHeading: {
    backgroundColor: 'secondary.light',
    width: '141px',
    borderRadius: '33px',
    height: '36px',
    fontSize: '13px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'secondary.main',
  },
  accordionWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  heading: {
    fontSize: '36px',
    fontWeight: '700',
    color: 'custom.green',
  },
  label: {
    fontWeight: '700',
    color: 'custom.green',
    fontSize: '16px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
