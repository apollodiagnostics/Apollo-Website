import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    padding: { xs: '40px', md: '3vw 6vw', lg: '2vw 4vw' },
    maxWidth: '1590px',
    margin: 'auto',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    gap: '38px',
    flexDirection: { xs: 'column', md: 'row' },
  },
  headerWrapper: {
    height: { xs: '120px', md: '84px' },
    display: 'flex',
    flexWrap: { xs: 'wrap', md: 'nowrap' },
    justifyContent: 'space-between',
    borderBottom: '2px solid',
    borderColor: 'primary.main',
  },
  testSection: {
    width: '100%',
  },
  infoWrapper: {
    // width: '100%',
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
    margin: 'auto',
  },
  card: {
    width: { xs: '100%', sm: '31%' },
    minWidth: '282px',
  },
  cardWrapper: {
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap',
    justifyContent: { xs: 'center', lg: 'unset' },
    marginTop: '24px',
  },
  sidePanel: {
    display: { xs: 'none', md: 'block' },
  },
  mobileSidePanel: {
    display: { xs: 'block', md: 'none' },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
