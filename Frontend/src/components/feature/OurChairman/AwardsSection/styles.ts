import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100vw',
    // display: 'flex',
    // justifyContent: 'center',
    // // margin:'auto',
    // // gap: '77px',
    // flexDirection: 'column',
  },
  innerWrapper: {
    padding: '32px',
    display: 'flex',
    maxWidth: '1590px',
    justifyContent: 'center',
    gap: '77px',
    flexDirection: 'column',
    margin: 'auto',
  },
  headingWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    height: '73px',
    width: '73px',
  },
  mainHeading: {
    fontWeight: '600',
    fontSize: '32px',
    color: 'common.white',
    textAlign: 'center',
  },
  heading: {
    fontWeight: '400',
    fontSize: '26px',
    color: 'custom.greyish.300',
    textAlign: 'center',
    maxWidth: '839px',
  },
  cardWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '43px',
    flexWrap: 'wrap',
  },
  card: {
    height: '100%',
    width: '100%',
    maxWidth: '268px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '19px',
  },
  cardHeading: {
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: '27px',
    color: 'common.white',
  },
  cardDescription: {
    fontWeight: '500',
    color: 'custom.greyish.300',
    fontSize: '16px',
    textAlign: 'center',
  },
  descriptionWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  awardsImage: {
    width: '192px',
    height: '175px',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
