import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: { xs: '3vw 6vw', lg: '3vw 4vw' },
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1590px',
    gap: '33px',
    margin: 'auto',
  },
  accordionWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  drawer: {
    boxShadow: 'none',
    borderRadius: 'none',
    backgroundColor: 'transparent',
  },
  headingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  sectionHeading: {
    width: '83px',
    display: 'flex',
    height: '33px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3px',
    fontSize: '13px',
    fontWeight: '700',
    color: 'secondary.main',
    borderRadius: '33px',
    backgroundColor: 'secondary.light',
  },
  heading: {
    fontWeight: '700',
    color: 'custom.green',
    fontSize: '36px',
  },
  toggleWrapper: {
    borderRadius: 'none',
    boxShadow: 'none',
    padding: 'none',
  },
  accordion: {
    borderBottom: '1px solid',
    borderColor: 'custom.greyish.100',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
