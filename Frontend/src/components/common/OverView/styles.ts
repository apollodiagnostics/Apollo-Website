import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    padding: '3vw 6vw',
    justifyContent: 'center',
    alignItems: 'stretch',
    maxWidth: '1590px',
    margin: 'auto',
    gap: '23px',
  },
  descriptionWrapper: {
    width: { xs: '100%', md: 'calc(100% - 476px)' },
    borderRadius: '16px',
    border: '1px solid ',
    borderColor: 'custom.darkGrey',
    paddingBottom: '23px',
  },
  headingWrapper: {
    borderBottom: '1px solid',
    width: '100%',
    borderColor: 'custom.darkGrey',
  },
  heading: {
    marginBottom: '13px',
    fontFamily: 'lato',
    fontSize: '18px',
    fontWeight: '700',
    padding: '32px 0px 0px 32px ',
    color: 'custom.green',
  },
  description: {
    color: 'custom.lightSilver',
    padding: '13px 32px 0px 32px !important',
    fontWeight: '500',
    fontSize: '16px',
  },
  imageWrapper: {
    width: '100%',
    maxWidth: { md: '452px' },
    height: { xs: '200px', md: '419px' },
    borderRadius: '13.91px',
    border: '1px solid ',
    borderColor: 'custom.darkGrey',
    overflow: 'hidden',
    img: {
      objectFit: 'cover',
    },
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
