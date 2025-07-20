import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    alignItems: 'start',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    padding: { xs: '10px', md: '2vw 6vw', lg: '2vw 4vw' },

    justifyContent: 'center',
    gap: '23px',
    maxWidth: '1590px',
    margin: 'auto',
    borderBottom: '1px solid #eee',
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
  },
  heading: {
    fontSize: '36px',
    fontWeight: '700',
    padding: '23px',
    color: 'custom.green',
  },
  description: {
    color: 'custom.lightSilver ',
    padding: '23px',
    fontWeight: '500',
    fontSize: '16px',
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
