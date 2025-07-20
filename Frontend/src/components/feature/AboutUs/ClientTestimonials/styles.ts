import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: { xs: '3vw 6vw', lg: '2vw 4vw' },
    height: 'fit-content',
    maxWidth: '1590px',
    margin: 'auto',
  },
  heading: {
    marginBottom: '34px',
    fontSize: { xs: '24px', md: '36px' },
    fontWeight: '700',
    color: 'custom.green',
  },
  sectionHeading: {
    width: '189px',
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
  headWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    overflow: 'scroll',
    scrollbarWidth: 'none',
    gap: { md: '30px' },
    padding: '20px 0px',
  },
  carouselWrapper: {
    padding: '0px',
    minHeight: 'unset',
  },
  button: {
    position: 'absolute',
    top: '0px',
    right: '6vw',
  },
  card: {
    width: '386px',
    minWidth: '301px',
    backgroundColor: 'primary.contrastText',
    padding: '13px',
    boxShadow: '0.77px 0.77px 11.65px 0px #0000001C',
  },
  cardsWrapper: {
    width: '100%',
    flexWrap: 'nowrap',
    overflowX: 'scroll',
    scrollbarWidth: 'none',
    paddingBottom: '10px',
  },
  cardHeading: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'custom.green',
    paddingLeft: 'none',
  },
  description: {
    fontSize: '16px',
    fontWeight: '500px',
    color: 'custom.lightSilver',
    paddingLeft: 'none',
  },
  icons: {
    height: '50px',
    width: '50px',
  },
  iconLabel: {
    marginLeft: '13px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
