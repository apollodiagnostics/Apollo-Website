import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  cardImage: {
    height: '200px',
    width: '100%',
    borderRadius: '16px',
    objectFit: 'cover',
  },
  button: {
    width: { xs: '80px', md: '122px' },
  },
  mainWrapper: {
    width: '100%',
    maxWidth: '1590px',
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
  },
  wrapper: {
    width: '100%',
    padding: { xs: '40px', md: '3vw 4vw' },
    display: 'flex',
    gap: '38px',
    flexDirection: { xs: 'column', md: 'row' },
  },
  testsContainer: {
    width: '100%',
  },
  headerWrapper: {
    width: '100%',
    height: { xs: '120px', md: '84px' },
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
  card: {
    width: { xs: '100%', sm: '23%' },
    minWidth: '282px',
  },
  cardWrapper: {
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap',
    justifyContent: { xs: 'center', lg: 'unset' },
    marginTop: '24px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
