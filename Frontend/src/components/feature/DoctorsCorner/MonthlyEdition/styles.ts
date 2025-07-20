import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: { xs: '2vw 6vw', lg: '2vw 4vw' },
    maxWidth: '1590px',
    gap: '32px',
    margin: 'auto',
  },
  headingWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionHeading: {
    width: '123px',
    backgroundColor: 'secondary.light',
    color: 'secondary.main',
    height: '30px',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '33px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '13px',
  },
  heading: {
    fontSize: { xs: '24px', md: '36px' },
    fontWeight: '700',
    lineHeight: '53px',
    color: 'custom.green',
  },
  cardWrapper: {
    display: 'flex',
    justifyContent: { xs: 'center', md: 'left' },
    flexWrap: 'wrap',
    gap: '32px',
  },
  card: {
    width: { xs: '100%', sm: '23%' },
    minWidth: '282px',
  },
  cardImage: {
    width: '100%',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
