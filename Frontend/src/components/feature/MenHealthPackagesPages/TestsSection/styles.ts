import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    padding: '3vw 6vw',
    maxWidth: '1590px',
    flexDirection: { xs: 'column', md: 'row' },
    margin: 'auto',
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
    width: '40%',
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
    color: 'custom.lightBlack',
    opacity: '70%',
  },
  searchBar: {
    width: '100%',
  },
  card: {
    height: '377px',
    width: { xs: '100%', sm: '23%' },
    minWidth: '282px',
  },
  cardWrapper: {
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap',
    justifyContent: { xs: 'center', sm: 'unset' },
    marginTop: '24px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
