import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '300px',
    border: '1px solid',
    borderColor: 'primary.light',
    borderRadius: '16px',
    overflow: 'hidden',
    height: 'fit-content',
    cursor: 'pointer',
  },
  activeTab: {
    width: '100%',
    height: '50px',
    backgroundColor: 'primary.light',
    borderColor: 'primary.light',
    color: 'primary.main',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 20px',
    cursor: 'pointer',
    '& p': { fontWeight: '600' },
  },
  tab: {
    width: '100%',
    height: '50px',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 20px',
    cursor: 'pointer',
    borderBottom: '1px solid ',
    borderColor: 'primary.light',
    ':last-child': {
      borderBottom: 'none',
    },
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
