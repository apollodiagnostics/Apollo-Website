import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: '12px 115px ',
    maxWidth: '1590px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
