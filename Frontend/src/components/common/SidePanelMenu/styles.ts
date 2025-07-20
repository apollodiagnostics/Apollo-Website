import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: { xs: '100%', md: '223px' },
    height: '32px',
    marginLeft: '3px',
    color: 'common.black',
    marginBottom: '24px',
    borderRadius: '0px',
    borderBottom: '1px solid',
    borderColor: '#EBEBEB',
  },
  checkbox: {
    height: '20px',
  },
  options: {
    marginTop: '18px',
    display: 'flex',
    gap: '18px',
    flexDirection: 'column',
    marginBottom: '18px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
