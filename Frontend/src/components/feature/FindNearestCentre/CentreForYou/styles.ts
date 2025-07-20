import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: { xs: '24px 16px ', md: '3vw 6vw', lg: '3vw 4vw' },
    maxWidth: '1590px',
    margin: 'auto',
  },
  mainWrapper: {
    width: { xs: '100%' },
    display: 'flex',
    flexWrap: 'wrap',
    gap: '23px',
    marginTop: '20px',
    // padding: { xs: '24px 0px ', md: '3vw 6vw' },
    justifyContent: 'center',
  },
  headerWrapper: {
    width: { xs: '100%', md: '93%' },
    maxWidth: '1590px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '2px solid',
    borderColor: 'primary.main',
  },
  infoWrapper: {
    width: '40%',
    gap: { lg: '8px' },
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
    width: '200px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
