import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {},
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
