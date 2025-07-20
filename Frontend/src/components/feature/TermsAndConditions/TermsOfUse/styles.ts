import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: '1vw 6vw',
    display: 'flex',
    maxWidth: '1590px',
    margin: 'auto',
    flexDirection: 'column',
    gap: '32px',
  },
  headingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '33px',
  },
  sectionHeading: {
    backgroundColor: 'secondary.light',
    width: '206px',
    borderRadius: '33px',
    height: '36px',
    fontSize: '13px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'secondary.main',
  },
  heading: {
    fontSize: '36px',
    fontWeight: '700',
    color: 'custom.green',
  },
  descriptionWrapper: {},
  description: {
    fontSize: '16px',
    fontWeight: '500',
    color: 'custom.lightSilver',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
