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
  },
  removeButton: {
    width: '100%',
    backgroundColor: 'secondary.main',
    ':hover': {
      backgroundColor: 'secondary.dark',
    },
  },
  testWrapper: {
    width: { xs: '196px', md: '283px' },
    height: 'fit-content',
    padding: { xs: '16px', md: '14px' },
    overflow: 'hidden',
  },
  priceWrapper: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  discount: {
    fontSize: '12px',
    fontWeight: '600',
    color: 'primary.main',
    backgroundColor: 'primary.light',
    padding: '4px 8px',
    borderRadius: '7px',
  },
  discountedPrice: {
    fontSize: { xs: '16px', md: '20px' },
    fontWeight: '700',
  },
  button: {
    width: { xs: '100%', md: '100%' },
  },
  buttonWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '10px',
  },
  price: {
    fontSize: { xs: '13px', md: '14px' },
    fontWeight: { xs: '400', md: '500' },
    color: 'custom.grey',
    textDecoration: 'line-through',
  },
  delivery: {
    display: 'flex',
    gap: '8px',
    alignItems: 'flex-start',
  },
  deliveryText: {
    display: 'flex',
    gap: '9px',
  },
  heading: {
    fontSize: { xs: '14px', md: '16px' },
    fontWeight: { xs: '600', md: '700' },
  },
  infoContainer: {
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  type: {
    width: { xs: '113px', md: '144px' },
    fontWeight: '600',
    fontSize: { xs: '11px', md: '14px' },
    textWrap: 'nowrap',
    color: 'custom.green',
  },
  queryData: {
    fontWeight: '500',
    fontSize: { xs: '11px', md: '14px' },
    textWrap: 'wrap',
    color: 'custom.grey',
  },
  icon: {
    width: '87px',
    height: '87px',
  },
  descIcon: {
    width: '22px',
    height: '22px',
    color: 'primary.main',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
