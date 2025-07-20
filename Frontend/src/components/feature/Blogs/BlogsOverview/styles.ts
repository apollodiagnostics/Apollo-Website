import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    padding: { xs: '1vw 6vw', lg: '1vw 4vw' },
    alignItems: 'stretch',
    flexDirection: { xs: 'column', md: 'row' },
    gap: '40px',
    maxWidth: '1590px',
    margin: 'auto',
  },
  imageWrapper: {
    width: '100%',
    height: { xs: 'auto', md: '432px' },
    borderRadius: '16px',
  },
  image: {
    borderRadius: '16px',
    height: { xs: '213px', md: '432px' },
    overflow: 'hidden',
    img: {
      objectFit: 'fill',
    },
  },
  headingSectionWrapper: {},
  headingWrapper: {},
  mainHeading: {
    fontWeight: '700',
    fontSize: '36px',
    color: 'custom.green',
  },
  heading: {
    fontWeight: '500',
    fontSize: '28px',
    color: 'custom.green',
  },
  description: {
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    color: 'custom.lightSilver',
    height: { xs: '95px', md: '166px' },
    overflow: 'hidden',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': { xs: '4', md: '7' },
  },
  descriptionWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '16px', md: '52px' },
  },
  labelWrapper: {
    width: '100%',
    display: 'flex',
    gap: '9px',
  },
  label: {
    color: 'secondary.main',
    fontWeight: '600',
    fontSize: '16px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
