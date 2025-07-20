import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100vw',
    padding: { xs: '16px', md: '32px' },
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  headingWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: { xs: '30px', md: '46px' },
  },
  sectionHeading: {
    fontWeight: '600',
    fontSize: { xs: '18px', md: '32px' },
    color: 'common.white',
    textAlign: 'center',
  },
  heading: {
    fontWeight: '400',
    fontSize: '26px',
    color: 'custom.greyish.300',
    textAlign: 'center',
  },
  cardWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '43px',
    border: '3px solid black',
  },
  card: {
    height: '100%',
    width: '100%',
    maxWidth: '278px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '8px',
  },
  cardHeading: {
    fontSize: { xs: '24px', md: '46px' },
    lineHeight: '36px',
    textAlign: 'center',
    fontWeight: '500',
    color: 'common.white',
  },
  cardDescription: {
    fontWeight: '400',
    color: 'common.white',
    fontSize: { xs: '12px', md: '18px' },
    textAlign: 'center',
  },
  gridContainer: {
    justifyContent: 'center',
    marginBottom: '30px',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
