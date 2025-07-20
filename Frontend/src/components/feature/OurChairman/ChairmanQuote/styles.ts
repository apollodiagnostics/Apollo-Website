import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    maxWidth: '1590px',
    alignItems: 'start',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    padding: ' 1vw 6vw',
    justifyContent: 'center',
    gap: '23px',
    margin: 'auto',
  },
  image: {
    img: {
      objectFit: 'cover',
    },
  },
  descriptionWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '40px', md: '71px' },
    padding: '23px',
  },
  headingWrapper: {
    width: '100%',
  },
  heading: {
    fontSize: { xs: '24px', md: '36px' },
    fontWeight: '700',
    color: 'custom.green',
  },
  nameWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontSize: { xs: '24px', md: '36px' },
    fontWeight: '600',
    lineHeight: '53px',
    color: 'custom.green',
  },
  designation: {
    fontSize: { xs: '18px', md: '28px' },
    fontWeight: '500',
    lineHeight: '30px',
    color: 'custom.lightSilver',
  },
  imageWrapper: {
    width: '100%',
    maxWidth: '522px',
    height: '419px',
    borderRadius: '13.91px',
    border: '1px solid ',
    borderColor: 'custom.darkGrey',
    overflow: 'hidden',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
