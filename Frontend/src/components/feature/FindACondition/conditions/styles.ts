import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: '1vw 6vw',
    maxWidth: '1590px',
  },
  headWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    padding: '20px 0px',
  },
  carouselWrapper: {
    padding: '0px',
    minHeight: 'unset',
  },
  iconLabel: {
    marginLeft: '13px',
  },
  icon: {
    height: '50px',
    width: '50px',
  },
  card: {
    width: '386px',
    minWidth: '301px',
    backgroundColor: 'primary.contrastText',
    padding: '13px',
    boxShadow: '0.77px 0.77px 11.65px 0px #0000001C',
  },
  heading: {
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
