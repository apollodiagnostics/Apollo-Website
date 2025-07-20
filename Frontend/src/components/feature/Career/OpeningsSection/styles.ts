import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: { xs: '3vw 6vw', md: '1vw 6vw' },
    height: 'fit-content',
    maxWidth: '1590px',
    margin: 'auto',
  },
  heading: {
    marginBottom: { md: '34px' },
    fontSize: { xs: '24px', md: '36px' },
    fontWeight: '700',
    color: 'custom.green',
  },
  headWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'scroll',
    scrollbarWidth: 'none',
    gap: { md: '22px' },
    padding: { md: '20px 0px' },
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
    width: '273px',
    height: '298px',
    minWidth: '297px',
    backgroundColor: 'primary.contrastText',
    padding: '13px',
    boxShadow: '0.77px 0.77px 11.65px 0px #0000001C',
  },
  cardHeading: {
    color: 'primary.main',
    fontSize: '22px',
    lineHeight: '28px',
  },
  mainHeading: {
    marginTop: '3px',
  },
  cardsWrapper: {
    width: '100%',
    flexWrap: 'nowrap',
    overflowX: 'scroll',
    scrollbarWidth: 'none',
    paddingBottom: '10px',
  },
  icons: {
    width: '45px',
    height: '45px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
