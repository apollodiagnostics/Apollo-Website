import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: { md: 'row', xs: 'column' },
    flexWrap: 'wrap',
    width: '100vw',
    gap: '34px',
    justifyContent: 'center',
    maxWidth: '1590px',
    margin: 'auto',
    padding: { xs: '3vw 6vw', lg: '2vw 4vw' },
  },
  detailContainer: {
    border: '1px solid',
    borderRadius: '16px',
    padding: '40px 24px',
    borderColor: 'custom.darkGrey',
    width: '100%',
    maxWidth: { lg: '356px' },
    display: 'flex',
    flexDirection: 'column',
    gap: '46px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  descriptionWrapper: {
    padding: '62px',
  },
  mapContainer: {
    width: '100%',
    maxWidth: { lg: '822px' },
    height: '415px',
    borderRadius: '16px',
    border: '4px solid ',
    borderColor: 'primary.contrastText',
  },
  location: {
    color: 'custom.lightSilver',
    fontWeight: '500',
    fontSize: { xs: '14px', md: '16px' },
    lineHeight: '24px',
  },
  addressName: {
    color: 'common.black',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    textDecoration: 'none',
    color: 'custom.lightSilver',
  },
  iconWrapper: {
    width: '26px',
    height: '26px',
    padding: '3px',
    color: 'custom.lightSilver',
    opacity: '50%',
  },
  contact: {
    color: 'custom.lightSilver',
    fontWeight: '500',
    fontSize: { xs: '14px', md: '16px' },
    lineHeight: '24px',
  },
  heading: {
    color: 'common.black',
    fontWeight: '700',
    fontSize: '18px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
