import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100vw',
    padding: '1vw 6vw',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '44px',
    transition: '1s',
    maxWidth: '1590px',
  },
  packagesWrapper: {
    width: '100%',
    display: 'flex',
    gap: '24px 36px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  infoContainer: {
    alignItems: 'center',
  },
  headerWrapper: {
    justifyContent: 'center',
  },
  footWrapper: {
    margin: 'auto',
  },
  sectionHeaderWrapper: {
    alignItems: 'center',
  },
  cardWrapper: {
    display: 'flex',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
