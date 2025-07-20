import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    border: '1px solid',
    borderColor: '#A81E5E33',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: 'common.white',
    gap: '20px',
    position: 'relative',
  },
  packageWrapper: {
    width: { xs: '196px', md: '385px' },
    height: { xs: '280px', md: '435px' },
    padding: { md: '8px' },
    position: 'relative',
  },
  testWrapper: {
    width: { xs: '232px', md: '288px' },
    height: 'fit-content',
    padding: { xs: '16px' },
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '50%',
    borderRadius: { md: '12px' },
    overflow: 'hidden',
    img: {
      objectFit: 'cover',
    },
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
    fontSize: { xs: '16px', md: '20px' },
    fontWeight: '700',
  },
  button: {
    width: '131px',
    padding: '10px 58px',
  },
  removeButton: {
    width: '131px',
    padding: '10px 58px',

    backgroundColor: 'secondary.main',
    ':hover': {
      backgroundColor: 'secondary.dark',
    },
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '5px',
  },
  testTag: {
    top: '8px',
    left: '8px',
    backgroundColor: 'primary.light',
    borderRadius: '33px',
    fontWeight: '600',
    fontSize: { xs: '10px', md: '12px' },
    width: 'fit-content',
    padding: { xs: '4px 8px', md: '4px 16px' },
    color: 'primary.main',
  },
  packageTag: {
    position: { xs: 'absolute', md: 'unset' },
    top: '8px',
    left: '8px',
    backgroundColor: 'primary.light',
    borderRadius: '33px',
    fontWeight: '600',
    fontSize: { xs: '10px', md: '12px' },
    width: 'fit-content',
    padding: { xs: '4px 8px', md: '4px 16px' },
    color: 'primary.main',
  },
  price: {
    fontSize: { xs: '13px', md: '14px' },
    fontWeight: { xs: '400', md: '500' },
    color: 'custom.grey',
    textDecoration: 'line-through',
  },
  delivery: {
    fontWeight: '500',
    fontSize: { xs: '11px', md: '14px' },
  },
  deliveryText: {
    color: 'custom.grey',
  },
  heading: {
    fontSize: { xs: '14px', md: '16px' },
    fontWeight: { xs: '600', md: '700' },
    height: '35px',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '2',
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
  safeTag: {
    height: '30px',
    position: 'absolute',
    top: '15px',
    right: '15px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '100px',
    backgroundColor: '#D8E7EE',
    padding: '4px 16px',
    gap: '4px',
    color: '#0D83A1',
  },
  safeIcon: { color: '#0D83A1' },
  safeText: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#0D83A1',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
