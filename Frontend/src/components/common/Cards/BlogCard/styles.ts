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
  },
  packageWrapper: {
    width: '289px',
    height: '405px',
    padding: { md: '8px' },
  },
  testWrapper: {
    width: { xs: '196px', md: '283px' },
    height: 'fit-content',
    padding: { xs: '16px', md: '24px' },
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
    paddingLeft: '0px',
    width: 'fit-content',
  },
  tag: {
    fontWeight: '600',
    fontSize: '12px',
    width: 'fit-content',
    color: 'secondary.main',
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
  },
  dot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: 'secondary.main',
    opacity: '20%',
    display: 'inline-block',
    margin: '0px 4px',
  },
  price: {
    fontSize: { xs: '13px', md: '14px' },
    fontWeight: { xs: '400', md: '500' },
    color: 'custom.grey',
    textDecoration: 'line-through',
  },
  description: {
    fontWeight: '500',
    fontSize: '13px',
    textWrap: 'noWrap',
  },
  descriptionText: {
    color: 'custom.grey',
  },
  heading: {
    fontSize: { xs: '14px', md: '16px' },
    fontWeight: { xs: '600', md: '700' },
  },
  infoContainer: {
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  icon: {
    width: '87px',
    height: '87px',
    marginBottom: '15px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
