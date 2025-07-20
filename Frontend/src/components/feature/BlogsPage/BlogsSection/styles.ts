import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1590px',
    margin: 'auto',
    padding: '1vw 6vw',
    gap: '32px',
  },
  headingWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  categoryWrapper: {
    display: 'flex',
    gap: '9px',
  },
  category: {
    border: '1px solid ',
    fontWeight: '500',
    fontSize: '16px',
    padding: '8px 12px',
    borderRadius: '24px',
    color: 'custom.green',
    borderColor: 'custom.darkGrey',
    ':hover': {
      color: 'common.black',
      transition: '0.5s',
    },
  },
  heading: {
    fontSize: '36px',
    fontWeight: '700',
    lineHeight: '53px',
    color: 'custom.green',
  },
  cardWrapper: {
    display: 'flex',
    justifyContent: { xs: 'center', md: 'space-around' },
    flexWrap: 'wrap',
    gap: '40px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
