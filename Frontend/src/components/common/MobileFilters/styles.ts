import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    borderRadius: '8px',
    height: 'fit-content',
    border: '1px solid #eee',
    zIndex: '2',
    position: 'relative',
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: { xs: '100%', md: '223px' },
    height: '32px',
    color: 'common.black',
    borderRadius: '8px',
  },
  checkbox: {
    height: '20px',
  },
  options: {
    padding: '10px',
    display: 'flex',
    gap: '18px',
    flexDirection: 'column',
    scrollbarWidth: 'none',
    marginBottom: '2px',
    borderRadius: '8px',
  },
  popOverOptions: {
    top: '33px',
    right: '0px',
    scrollbarWidth: 'none',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
