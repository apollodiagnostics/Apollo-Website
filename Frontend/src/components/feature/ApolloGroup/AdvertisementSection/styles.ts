import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    maxWidth: '1590px',
    margin: 'auto',
    // padding: '1vw 6vw',
  },
  innerWrapper: {
    // top: '1vw',
    img: {
      objectFit: { xs: 'cover', md: 'contain' },
      borderRadius: '8px',
    },
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
