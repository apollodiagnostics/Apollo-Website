import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100vw',
    height: '100%',
    border: '1px solid ',
    borderColor: 'custom.darkGrey',
    borderRadius: '16px',
  },
  centreDetailsCard: {},
  headingWrapper: {
    height: '67px',
    padding: '23px',
    borderBottom: '1px solid',
    borderColor: 'custom.darkGrey',
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
  },
  heading: {
    fontWeight: '700',
    fontSize: '18px',
    color: 'custom.green',
  },
  subHeading: {
    fontWeight: '500',
    fontSize: '14px',
    color: 'cutom.green',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
