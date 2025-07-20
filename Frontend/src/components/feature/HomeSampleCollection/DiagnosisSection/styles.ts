import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    maxWidth: '1590px',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    padding: { md: ' 3vw 6vw' },
    gap: '23px',
  },
  descriptionWrapper: {
    borderRadius: '16px',
    border: '1px solid ',
    maxWidth: '763px',
    borderColor: 'custom.darkGrey',
    paddingBottom: '23px',
  },
  headingWrapper: {
    borderBottom: '1px solid',
    width: '100%',
    borderColor: 'custom.darkGrey',
  },
  heading: {
    marginBottom: '13px',
    fontSize: '18px',
    fontWeight: '700',
    padding: '32px 0px 0px 32px ',
    color: 'custom.green',
  },
  description: {
    color: 'custom.lightSilver ',
    padding: '13px 32px 0px 32px ',
    fontWeight: '500',
    fontSize: '16px',
  },
  diagonisStepsWrapper: {
    width: '100%',
    borderRadius: '16px',
    border: '1px solid ',
    borderColor: 'custom.darkGrey',
  },
  timeContent: {
    fontWeight: '400',
    fontSize: '14px',
    color: 'custom.green',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>

export default styles
