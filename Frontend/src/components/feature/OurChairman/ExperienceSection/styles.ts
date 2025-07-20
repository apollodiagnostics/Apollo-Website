import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  sectionHeading: {
    width: '189px',
    maxWidth: '1590px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
