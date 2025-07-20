import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: '0vw 6vw',
    maxWidth: '1590px',
  },
  overviewImageWrapper: {
    height: '414px',
  },
  image: {
    borderRadius: '16px',
    overflow: 'hidden',
    img: {
      objectFit: 'cover',
    },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
