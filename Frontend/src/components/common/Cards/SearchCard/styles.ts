import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: 'common.white',
    gap: '20px',
  },
  removeButton: {
    width: '80px',
    height: '29px',
    backgroundColor: 'secondary.main',
    ':hover': {
      backgroundColor: 'secondary.dark',
      border: '0px',
    },
    color: 'common.white',
    border: '0px',
  },
  packageWrapper: {
    width: '100%',
    padding: '16px',
    height: { md: '100px' },
    position: 'relative',
    borderBottom: '1px solid',
    borderColor: 'custom.lightGrey',
  },
  priceWrapper: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  discount: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'success.main',
  },
  discountedPrice: {
    fontSize: { xs: '12px', md: '16px' },
    fontWeight: '500',
    textDecoration: 'line-through',
    color: 'custom.grey',
  },
  button: {
    width: '80px',
    height: '29px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    alignItems: 'end',
  },
  price: {
    fontSize: { xs: '13px', md: '18px' },
    fontWeight: '700',
    color: 'custom.green',
  },
  delivery: {
    fontWeight: '500',
    fontSize: { xs: '11px', md: '14px' },
    lineHeight: '21px',
    color: 'custom.grey',
  },
  heading: {
    fontSize: { xs: '14px', md: '16px' },
    fontWeight: '600',
    // height: '38px',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    webkitBoxOrient: 'vertical',
    webkitLineClamp: '2',
    color: 'custom.bluishBlack',
  },
  infoContainer: {
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  icon: {
    width: '87px',
    height: '87px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
