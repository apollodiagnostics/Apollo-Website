import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: { marginTop: '131px', backgroundColor: '#F8F9FE' },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
