import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    maxWidth: '1590px',
    margin: 'auto',
  },
  descriptionWrapper: {
    minHeight: { md: '419px' },
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
