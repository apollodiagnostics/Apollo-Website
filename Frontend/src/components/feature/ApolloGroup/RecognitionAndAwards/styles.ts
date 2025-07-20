import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    alignItems: 'start',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    padding: { xs: '3vw 6vw', md: '2vw 6vw' },
    justifyContent: 'center',
    gap: '23px',
    maxWidth: '1590px',
    margin: 'auto',
  },
  image: {
    img: {
      objectFit: 'cover',
    },
  },
  descriptionWrapper: {
    width: '100%',
    minHeight: { md: '419px' },
    height: { xs: 'auto', md: 'unset' },
  },
  headingWrapper: {
    width: '100%',
    marginBottom: '25px',
  },
  heading: {
    fontSize: { xs: '24px', md: '36px' },
    fontWeight: '700',
    color: 'custom.green',
  },
  description: {
    color: 'custom.green',
    fontWeight: '500',
    fontSize: { xs: '12px', md: '16px' },
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
