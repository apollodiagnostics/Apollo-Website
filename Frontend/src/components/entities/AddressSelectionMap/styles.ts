import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mapContainer: {
    position: 'relative',
    width: '100%',
    height: '400px',
  },
  searchInputWrapper: {
    width: '90%',
  },
  searchInput: {
    outline: 'none',
    backgroundColor: 'common.white',
  },
  firstViewWrapper: {
    margin: '20px auto',
    width: '100%',
    '& div': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  infoWrapper: {
    display: 'flex',
    gap: '16px',
    fontWeight: '500',
    fontSize: '16px',
    color: 'custom.lightSilver',
    width: '100%',
    alighItems: 'center',
    marginTop: '20px',
    padding: '0 20px',
  },
  backIcon: {
    fontSize: '30px',
    color: 'custom.lightSilver',
    cursor: 'pointer',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
