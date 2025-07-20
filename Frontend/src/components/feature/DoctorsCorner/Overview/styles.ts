import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    padding: '2vw 6vw',
    alignItems: 'stretch',
    flexDirection: { xs: 'column', md: 'row' },
    gap: '40px',
    maxWidth: '1590px',
    margin: 'auto',
  },
  imageWrapper: {
    width: '100%',
    height: '414px',
    borderRadius: '16px',
  },
  image: {
    borderRadius: '16px',
    overflow: 'hidden',
    img: {
      objectFit: 'cover',
    },
  },
  headingSectionWrapper: {},
  headingWrapper: {},
  mainHeading: {
    fontWeight: '700',
    fontSize: { xs: '24px', md: '36px' },
    color: 'custom.green',
  },
  heading: {
    fontWeight: '500',
    fontSize: { xs: '12px', md: '28px' },
    color: 'custom.green',
  },
  description: {
    fontWeight: '500',
    fontSize: '16px',
    height: '166px',
    lineHeight: '24px',
    color: 'custom.lightSilver',
    overflow: 'hidden',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '7',
  },
  descriptionWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '52px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
