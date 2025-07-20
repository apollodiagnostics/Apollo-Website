import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    overflowY: 'scroll',
    gap: '16px',
    position: 'relative',
    padding: '100px 0 112px 0',
  },
  header: {
    zIndex: '1',
    position: 'fixed',
    borderTopLeftRadius: { md: '8px' },
    top: '0',
    height: '84px',
    width: '100%',
    display: 'flex',
    justifyContent: { xs: 'space-between', md: 'unset' },
    gap: { md: '340px' },
    alignItems: 'center',
    backgroundColor: 'common.white',
    padding: '24px',
    boxSizing: 'border-box',
    boxShadow: '0px -1px 19.6px 0px #00000017',
  },
  heading: {
    color: 'custom.black',
    fontSize: '24px',
    fontWeight: '700',
  },
  closeIcon: {
    fontSize: '24px',
    cursor: 'pointer',
  },
  itemWrapper: {
    width: '100%',
    scrollbarWidth: 'none',
    backgroundColor: 'common.white',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  itemHeading: {
    fontSize: { xs: '15px', md: '18px' },
    fontWeight: '600',
    color: 'custom.black',
  },
  itemDescWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  itemCard: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  itemInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  itemDescription: {
    fontSize: { xs: '12px', md: '14px' },
    fontWeight: '500',
    color: 'custom.grey',
  },
  pricesWrapper: {
    minWidth: '100px',
    display: 'flex',
    gap: '8px',
    alignItem: 'center',
    justifyContent: 'flex-end',
  },
  fullPrice: {
    textDecorationLine: 'line-through',
  },
  removeButton: {
    width: '70px',
    height: '26px',
    border: '1px solid',
    borderColor: 'custom.grey',
    color: 'custom.grey',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '500',
    '&:hover': {
      color: 'common.black',
      border: '1px solid',
      borderColor: 'common.black',
      backgroundColor: 'custom.lightGrey',
    },
  },
  sideWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    gap: '12px',
  },
  reportIcon: {
    width: '20px',
    height: '20px',
    img: {
      objectFit: 'contain',
    },
  },
  linksWrapper: {
    width: '100%',
    height: '75px',
    padding: '24px',
    backgroundColor: 'common.white',
  },
  addMoreLink: {
    color: 'primary.main',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  summaryWrapper: {
    padding: '24px',
    backgroundColor: 'common.white',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  categoryPrice: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  price: {
    fontWeight: '600',
  },
  discountPrice: {
    color: 'error.main',
  },
  cartIcon: {
    width: '30px',
    height: '30px',
    img: {
      objectFit: 'contain',
    },
  },
  ctaWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    backgroundColor: 'common.white',
    width: { xs: '100%', md: '504px' },
    height: '96px',
    boxSizing: 'border-box',
    position: 'fixed',
    bottom: '0',
    boxShadow: '0px -1px 19.6px 0px #00000017',
    borderRadius: { md: '0px 0px 0px 8px' },
  },
  ctaButton: {
    fontSize: { md: '20px' },
    fontWeight: '600',
    height: { xs: '50px', md: '64px' },
  },
  cartMiniSummary: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
