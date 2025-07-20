import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    margin: '0px auto',
    maxWidth: '1590px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '3vw 6vw',
  },
  cardsWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  heading: {
    fontSize: '20px',
    fontWeight: '600',
  },
  card: {
    width: '100%',
    maxWidth: 'unset',
    minWidth: '320px',
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    color: 'custom.lightSilver',
    cursor: 'pointer',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
