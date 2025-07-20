import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  label: {
    fontSize: '14px',
    color: 'custom.darkSilver',
    fontWeight: '400',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  checkBox: {
    color: 'custom.darkGrey',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
