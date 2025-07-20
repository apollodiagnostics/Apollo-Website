import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  fabWrapper: {
    position: 'fixed',
    bottom: '10%',
    right: '30px',
    display: 'flex',
    alignItems: 'end',
    zIndex: '999',
    flexDirection: 'column',
    gap: '20px',
  },
  infoWrapper: {
    // padding: { xs: '0px', md: '20px' },
    backgroundColor: 'custom.lightMaroon',
    height: { xs: '48px', md: '56px' },
    transition: 'width 0.3s',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: 'white',
    borderRadius: '16px 8px 8px 16px',
    marginRight: { xs: '-30px', md: '-30px' },
    textDecoration: 'none',
  },
  fab: {
    height: { xs: '48px', md: '56px' },
    width: { xs: '48px', md: '56px' },
    backgroundColor: 'custom.darkPink',
    '&:hover': { backgroundColor: '#25D366' },
  },
  info: {
    whiteSpace: 'nowrap',
    textAlign: 'left',
    marginLeft: { xs: '25px', md: '0px' },
    fontSize: { xs: '12px', md: '16px' },
    color: 'primary.main',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
