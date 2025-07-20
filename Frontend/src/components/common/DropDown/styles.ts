import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  heading: {
    width: '100%',
    height: '63px',
    padding: '0px 24px',
    borderBottom: '1px solid',
    borderTop: '1px solid',
    borderColor: 'custom.lightGrey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: '400',
    color: 'common.black',
  },
  optionsWrapper: {},
  option: {
    height: '51px',
    padding: '0px 24px',
    borderBottom: '1px solid',
    borderColor: 'custom.lightGrey',
    fontSize: '14px',
    fontWeight: '400',
    color: 'common.black',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'custom.lightPink',
  },
  activeCell: {
    color: 'primary.main',
    borderRight: '3px solid',
    borderLeftColor: 'primary.main',
    fontWeight: '500',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
