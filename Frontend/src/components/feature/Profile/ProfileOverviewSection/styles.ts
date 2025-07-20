import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1vw 6vw',
    maxWidth: '1590px',
    margin: 'auto',
    gap: `24px`,
    flexDirection: { xs: 'column', md: 'row' },
  },
  cardsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    gap: '16px',
  },
  profileInfo: {
    color: 'custom.lightSilver',
    fontWeight: '500',
    display: 'flex',
    gap: '16px',
  },
  linkWrapper: {
    width: { xs: '100%', md: '40%' },
    height: 'fit-content',
    borderRadius: '16px',
    border: '1px solid ',
    borderColor: 'custom.darkGrey',
    paddingBottom: '23px',
  },
  descriptionWrapper: {
    width: { xs: '100%', md: '100%' },
    borderRadius: '16px',
    border: '1px solid ',
    borderColor: 'custom.darkGrey',
    paddingBottom: '23px',
  },
  headingWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid',
    width: '100%',
    borderColor: 'custom.darkGrey',
    padding: '22px',
    height: '70px',
  },
  heading: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'custom.green',
  },
  description: {
    color: 'custom.lightSilver ',
    padding: '13px 32px 0px 32px ',
    fontWeight: '500',
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  buttonWrapper: {
    color: 'custom.lightSilver ',
    fontWeight: '500',
    fontSize: '16px',
    display: 'flex',
    gap: '5px',
    flexDirection: 'column',
  },
  infoHeader: {
    fontWeight: '700',
  },
  button: {
    width: '100%',
    height: '50px',
    flexDirection: 'row-reverse',
    gap: '16px',
    border: '1px solid transparent',
    justifyContent: 'start',
    borderRadius: '0px',
    borderColor: 'transparent',
  },
  buttonIcon: {
    fontSize: '24px',
  },
  editButton: {
    width: '150px',
    float: 'left',
  },
  addressPopupDialog: {
    position: 'fixed',
    right: '20px',
    bottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
