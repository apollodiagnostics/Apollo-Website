import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100vw',
    backgroundColor: 'custom.lightPink',
  },
  innerWrapper: {
    display: 'flex',
    maxWidth: '1590px',
    margin: 'auto',
    flexDirection: 'column',
    backgroundColor: 'custom.lightPink',
    textAlign: { xs: 'center', md: 'unset' },
    padding: { xs: '2vw 6vw', lg: '2vw 4vw' },
    gap: '32px',
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
  highlightsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: { xs: '30px' },
  },
  sectionHeadingWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px',
    minWidth: { md: '516px' },
  },
  mainHeading: {
    fontSize: { xs: '24px', md: '36px' },
    fontWeight: '700',
    color: 'custom.green',
  },
  card: {
    width: { xs: '100%', md: '230px' },
    display: 'flex',
    justifyContent: { xs: 'center', md: 'flex-start' },
    flexDirection: 'column',
    gap: '32px',
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: { xs: 'center', md: 'flex-start' },
    alignItems: 'center',
  },
  image: {
    height: '120px',
    width: '120px',
  },
  descriptionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '13px',
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: { xs: 'center', md: 'flex-start' },
    fontWeight: '600',
    fontSize: '18px',
    color: 'custom.green',
  },
  description: {
    fontWeight: '500',
    color: 'custom.lightSilver',
    fontSize: '16px',
    textAlign: { xs: 'center', md: 'left' },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
