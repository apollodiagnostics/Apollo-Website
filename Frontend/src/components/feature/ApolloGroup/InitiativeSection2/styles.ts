import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  sectionHeading: {
    width: '149px',
    maxWidth: '1590px',
  },
  wrapper: {
    padding: { xs: '2vw 6vw', md: '1vw 6vw' },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
