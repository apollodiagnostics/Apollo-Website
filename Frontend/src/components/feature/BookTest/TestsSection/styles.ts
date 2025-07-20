import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1590px',
    padding: { xs: '40px', md: '3vw 6vw' },
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    gap: '38px',
    flexDirection: { xs: 'column', md: 'row' },
  },
  headerWrapper: {
    width: '100%',
    height: '84px',
    display: 'flex',
    justifyContent: 'space-between',
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
    width: '40%',
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
    width: { xs: '100%', sm: '282px' },
  },
  cardWrapper: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: 'left',
    marginTop: '24px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
