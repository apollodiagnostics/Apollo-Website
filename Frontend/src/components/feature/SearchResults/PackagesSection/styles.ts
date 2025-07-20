import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    display: 'flex',
    gap: '38px',
    flexDirection: { xs: 'column' },
    maxWidth: '1590px',
    padding: { xs: '40px', md: '3vw 6vw', xl: '2vw 4vw' },
    margin: 'auto',
  },
  headerWrapper: {
    width: '100%',
    height: { xs: '60px', md: '84px' },
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: { xs: 'space-around', md: 'space-between' },
    borderBottom: '2px solid',
    borderColor: 'primary.main',
  },
  infoWrapper: {
    width: '100%',
    gap: '8px',
    display: 'flex',
    flexDirection: 'column',
  },
  testsContainer: {
    width: '100%',
  },
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
  },
  searchCta: {
    width: { xs: '100%', md: '40%' },
  },
  heading: {
    fontSize: { xs: '16px', md: '24px' },
    fontWeight: '700',
  },
  results: {
    fontSize: { xs: '12px', md: '16px' },
    fontWeight: '500',
    color: 'custom.lightSilver',
    opacity: '70%',
  },
  searchBar: {
    width: '100%',
  },
  button: {
    width: { md: '122px' },
  },
  card: {
    height: '377px',
    width: { xs: '100%', sm: '23%' },
    minWidth: '282px',
  },
  cardWrapper: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    marginTop: '24px',
  },
  cardImage: {
    height: '200px',
    width: '100%',
    borderRadius: '16px',
    objectFit: 'cover',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
