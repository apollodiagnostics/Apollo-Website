import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  sectionHeading: {
    width: '93px',
    maxWidth: '1590px',
  },
  wrapper: {
    padding: { xs: '2vw 6vw', lg: '1vw 4vw' },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
