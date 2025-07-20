import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    margin: 'auto',
    padding: { xs: '6vw', lg: '4vw' },
    maxWidth: '1590px',
    marginTop: { md: '96px' },
    // marginTop: '8vw',
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
    width: { xs: '100%', md: '288px' },
  },
  cardWrapper: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '24px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
