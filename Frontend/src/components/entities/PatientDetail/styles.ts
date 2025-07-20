import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    maxWidth: '938px',
    backgroundColor: 'common.white',
    borderRadius: '16px',
    padding: { xs: '26px', md: '16px' },
    display: 'flex',
    gap: { xs: 'unset', md: '20px' },
    border: '1px solid',
    borderColor: 'custom.greyish.500',
  },
  mobileImageWrapper: {
    display: 'flex',
    width: '100%',
    gap: { xs: '10px', md: '0px' },
  },
  mobileImage: {
    height: 'unset',
    width: 'unset',
    display: { xs: 'flex', md: 'none' },
  },
  image: {
    height: '50px',
    width: '55px',
    display: { xs: 'none', md: 'flex' },
  },
  nameWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
  },
  name: {
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: { xs: '24px', md: '36px' },
    height: '36px',
    color: 'custom.green',
  },
  age: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: { xs: '24px', md: '36px' },
  },
  divider: {
    margin: '10px 0px',
  },
  dataLeft: {
    fontSize: { xs: '12px', md: '14px' },
    fontWeight: '500',
    lineHeight: { xs: '18px', md: '24px' },
    height: '36x',
    color: 'custom.lightSilver',
  },
  dataRight: {
    fontSize: { xs: '12px', md: '14px' },
    fontWeight: '400',
    lineHeight: { xs: '18px', md: '24px' },
    height: '36x',
    color: 'custom.lightSilver',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  infoContainer: {
    display: 'flex',
    gap: '20px',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: { xs: 'start', md: 'flex-end' },
  },
  ageContainer: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    fontSize: '16px',
  },
  nameInfo: {
    display: 'flex',
    flexDirection: { xs: 'row', md: 'row' },
    justifyContent: 'space-between',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5px',
  },
  deleteIcon: {
    cursor: 'pointer',
    color: 'primary.main',
    marginRight: '20px',
    fontSize: '20px',
    // pointerEvents: 'none',
    border: '0.5px solid',
    borderColor: 'primary.main',
    padding: '6px',
    boxSizing: 'content-box',
    borderRadius: '6px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
