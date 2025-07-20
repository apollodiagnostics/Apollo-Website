import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: { xs: '3vw 6vw', lg: '3vw 4vw' },
    maxWidth: '1590px',
    margin: 'auto',
    gap: '32px',
  },
  headingWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  categoryWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
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
  active: {
    backgroundColor: 'primary.light',
  },
  cardWrapper: {
    maxWidth: '1233px',
    display: 'flex',
    justifyContent: { xs: 'center', md: 'flex-start' },
    flexWrap: 'wrap',
    gap: '20px',
  },
  allCategories: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'primary.main',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
