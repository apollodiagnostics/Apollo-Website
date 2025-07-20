import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  icon: {
    width: '36px',
    height: '36px',
    img: {
      objectFit: 'contain',
    },
  },
  wrapper: {
    width: '36px',
    backgroundColor: 'primary.light',
    height: '36px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
