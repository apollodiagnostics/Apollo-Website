import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    alignItems: 'start',
    // flexDirection: { xs: 'column-reverse', md: 'row' },
    padding: { xs: ' 2vw 6vw', lg: ' 2vw 4vw' },
    justifyContent: 'center',
    gap: '23px',
    maxWidth: '1590px',
    margin: 'auto',
    ':nth-child(even)': {
      flexDirection: {
        xs: 'column-reverse',
        md: 'row',
      },
    },
    ':nth-child(odd)': {
      flexDirection: {
        xs: 'column-reverse',
        md: 'row-reverse',
      },
    },
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
