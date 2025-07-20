import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100vw',
  },
  innerWrapper: {
    margin: 'auto',
    maxWidth: '1590px',
    padding: '3vw 6vw',
  },
  cardWrapper: {
    maxWidth: '1590px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: '56px',
  },
  card: {
    width: '366px',
  },
  image: {
    maxWidth: '364px',
    height: '411px',
    marginBottom: '23px',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  table: {
    display: 'flex',
    justifyContent: 'center',
  },
  name: {
    fontSize: '26px',
    textAlign: 'center',
    fontWeight: '700',
    color: 'custom.green',
  },
  designation: {
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: '700',
    color: 'custom.lightSilver',
    lineHeight: '34px',
  },
  email: {
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: '34px',
    color: 'custom.lightSilver',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
