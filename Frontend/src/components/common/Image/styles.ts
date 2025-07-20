import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: { position: 'relative', width: '100%', height: '100%' },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
