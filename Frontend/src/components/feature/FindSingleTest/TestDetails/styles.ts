import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: '3vw 6vw',
    maxWidth: '1590px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
