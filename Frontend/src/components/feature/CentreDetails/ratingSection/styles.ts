import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: '1vw 6vw',
    borderRadius: '16px',
    maxWidth: '1590px',
    margin: 'auto',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 32px',
    width: '300px',
    gap: '16px',
  },
  heading: {
    fontWeight: '700',
  },
  rating: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  rated: {
    fontWeight: '500',
  },
  stars: {
    display: 'flex',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
