import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    color: 'unset',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
