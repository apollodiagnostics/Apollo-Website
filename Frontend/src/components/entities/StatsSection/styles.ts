import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100vw',
    padding: { xs: '24px 0px', md: '48px' },
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  headingWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: { xs: '22px', md: '32px' },
  },
  sectionHeading: {
    fontWeight: '600',
    fontSize: { xs: '18px', md: '32px' },
    color: 'common.white',
    textAlign: 'center',
  },
  heading: {
    fontWeight: '400',
    fontSize: '26px',
    color: 'custom.greyish.300',
    textAlign: 'center',
  },
  cardWrapper: {
    maxWidth: '1190px',
    margin: 'auto',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: { xs: '25px', md: '43px' },
    padding: { xs: '0px', md: '36px' },
  },
  card: {
    height: { md: '138px' },
    width: { xs: '110px', md: '100%' },
    backgroundColor: { xs: 'none', md: 'rgba(255, 255, 255, 0.1)' },
    maxWidth: '286px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '5px',
    borderRadius: '16px',
    padding: { xs: '0px 5px', md: '24px 16px' },
  },
  cardDescription: {
    fontSize: { xs: '12px', md: '18px' },
    fontWeight: '400',
    color: 'common.white',
    lineHeight: { xs: '18px', md: '28px' },
    textAlign: 'center',
  },
  cardHeading: {
    textAlign: 'center',
    fontSize: { xs: '24px', md: '42px' },
    fontWeight: '500',
    color: 'common.white',
    lineHeight: { xs: '36px', md: '46px' },
    display: 'inline-block',
    // animation: 'rotate 5s linear',
    // transition: 'transform 1s ease-in-out infinite',
    // '@keyframes rotate': {
    //   from: {
    //     transform: 'rotate(360deg)',
    //   },
    //   to: {
    //     transform: 'rotate(0deg)',
    //   },
    // },
    // animation: 'zoomInOut 5s ease-in-out infinite',
    // '@keyframes zoomInOut': {
    //   '0%, 100%': {
    //     transform: 'scale(1)',
    //   },
    //   '50%': {
    //     transform: 'scale(1.2)',
    //   },
    // },
    perspective: '1000px',
    animation: 'casinoRotate 1s linear ',
    '@keyframes casinoRotate': {
      '0%': { transform: 'rotateX(0deg)' },
      '100%': { transform: 'rotateX(360deg)' },
    },
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
