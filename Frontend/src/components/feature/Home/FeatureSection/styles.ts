import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '90%',
    padding: { md: '0 6vw', lg: 'unset' },
    marginTop: { xs: '24px', md: '25px' },
    marginBottom: { xs: '24px', md: '16px' },
    maxWidth: { md: '100%', lg: '1204px' },
    margin: 'auto',
  },
  mainWrapper: {
    marginTop: { xs: '24px', md: 'unset' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchBar: {
    display: { xs: 'block', md: 'none' },
  },
  innerWrapper: {
    padding: '24px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'common.white',
    borderRadius: '24px',
    width: '100%',
    margin: 'auto',
  },
  heading: {
    fontSize: { xs: '16px', lg: '24px' },
    fontWeight: { xs: '800', lg: '700' },
    color: 'custom.green',
    marginBottom: '16px',
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', lg: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '24px',
  },
  card: {
    width: { xs: '100%', lg: '374px' },
    maxWidth: 'unset',
    '&:hover': {
      backgroundColor: 'rgba(227, 200, 211, 0.25)',
    },
  },
  infoContainer: {
    margin: '8px 0px',
  },
  description: {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '21px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
