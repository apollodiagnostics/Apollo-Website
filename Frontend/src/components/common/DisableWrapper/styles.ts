import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    opacity: '50%',
    pointerEvents: 'none',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
