import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    color: 'unset',
    display: 'flex',
    flexDirection: 'column',
    gap: '33px',
    maxWidth: '1590px',
    margin: 'auto',
    padding: { xs: '40px', md: '1vw 6vw', xl: '1vw 4vw' },
  },
  heading: {
    fontSize: { xs: '18px', md: '24px' },
    fontWeight: '700',
  },
  description: {
    fontSize: { xs: '14px', md: '16px' },
    fontWeight: '500',
    color: 'custom.grey',
    textAlign: 'justify',
    lineHeight: '1.5',
  },
  headWrapper: {
    padding: { xs: '1vw 4vw', md: '1vw 6vw', lg: '1vw 4vw', xl: '1vw 2.5vw' },
    display: 'flex',
    maxWidth: '1590px',
    margin: 'auto',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    gap: '32px',
    justifyContent: { md: 'center', lg: 'space-between' },
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '888px',
  },
  card: {
    height: { xs: 'max-content', md: 'fit-content' },
    width: '100%',
    margin: { xs: 'auto', md: 'unset' },
  },
  guaranteeSection: {
    display: { xs: 'none', md: 'flex' },
    flexWrap: { xs: 'wrap', md: 'nowrap' },
    gap: { xs: '16px', md: '0px' },
    justifyContent: 'space-between',
  },
  guaranteeTagImage: {
    width: { xs: '100vw', md: '185px' },
    height: { xs: '26vw', md: '82px' },
  },
  accreditationCertify: {
    width: { xs: '100%', md: '666px', lg: '300px' },
    height: '65px',
  },
  imagesSection: {
    display: 'flex',
    gap: '16px',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  faqSection: {
    width: '100%',
    display: 'flex',
    gap: '32px',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    alignItems: { xs: 'center' },
    justifyContent: { xs: 'center', md: 'space-between' },
  },
  faqAccordionsWrapper: {
    width: '100%',
    // maxWidth: '788px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  middleContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    justifyContent: 'start',
    width: { xs: '100%', md: 'unset' },
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    justifyContent: 'start',
    width: { xs: '100%', md: '300px' },
    position: { xs: 'initial', md: 'sticky' },
    top: '150px',
    height: 'fit-content',
  },
  leftContainer: {
    flexDirection: 'column',
    gap: '16px',
    justifyContent: 'start',
    width: { xs: '100%', md: '300px' },
    position: { xs: 'initial', md: 'sticky' },
    top: '150px',
    height: 'fit-content',
    display: { xs: 'flex', md: 'none', lg: 'flex' },
  },
  advertisementWrapper: {
    width: { xs: '100%', md: '666px', lg: '300px' },
    height: '272px',
  },
  testInclusionsWrapper: {
    fontSize: '24px',
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'column',
  },
  descriptionWrapper: {},
  cardWrapper: {
    // boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    padding: '20px 16px',
    borderRadius: '16px',
    backgroundColor: 'common.white',
  },
  testDetailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  leftTab: {
    display: { xs: 'none', md: 'block' },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
