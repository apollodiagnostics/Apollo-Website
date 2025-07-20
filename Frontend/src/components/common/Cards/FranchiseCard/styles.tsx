import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    alignItems: 'start',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    padding: ' 2vw 6vw',
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
  },
  heading: {
    fontSize: '36px',
    fontWeight: '700',
    padding: '23px',
    color: 'custom.green',
  },
  description: {
    color: 'custom.lightSilver ',
    padding: '0px',
    display: 'list-item',
    fontWeight: '500',
    fontSize: '18px',
  },
  imageWrapper: {
    width: '100%',
    maxWidth: '522px',
    height: '419px',
    borderRadius: '14px',
    border: '1px solid ',
    borderColor: 'custom.darkGrey',
    overflow: 'hidden',
  },
  list: {
    padding: '0% 5%',
  },
  listContainer: {
    listStyleType: 'disc',
    paddingLeft: '16px',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
