import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    zIndex: 10,
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
