import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1590px',
    gap: { xs: '13px', md: '24px' },
  },
  sectionWrapper: {
    minHeight: '16vw',
    padding: '2vw 6vw',
  },
  popOverSection: {
    width: '89%',
    left: '0',
    right: '0',
    margin: 'auto',
    maxWidth: '1203px',
    position: 'unset',
  },
  selectWrapper: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '13px',
  },
  select: {
    width: '100%',
    maxWidth: { md: '569px' },
  },
  inputWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '13px',
  },
  input: {
    width: '100%',
    maxWidth: { md: '569px' },
  },
  commonInput: {
    border: '1px solid lightgrey',
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    maxWidth: { md: '256px' },
    height: '44px',
  },
  heading: {
    fontWeight: '700',
    fontSize: '24px',
    color: 'custom.green',
  },
  inputBar: {
    fontSize: '14px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
