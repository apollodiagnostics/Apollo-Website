import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    color: 'unset',
    maxWidth: '1590px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
