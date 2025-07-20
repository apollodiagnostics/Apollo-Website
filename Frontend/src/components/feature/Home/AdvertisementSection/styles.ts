import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: { xs: '100%', md: '100vw' },
    height: { xs: '100%', md: '333px' },
    maxWidth: '1600px',
    margin: 'auto',
    // padding: { xs: '0px 16px' }, // pt:0px because the element above the current element has padding, which satisfies our the gap requirements
    marginBottom: { xs: '24px', md: 'unset' },
  },
  image: {
    height: { xs: '140px', md: '100%' },
    width: '100%',
    img: {
      objectFit: { xs: 'fill', md: 'fill' },
      borderRadius: { xs: '8px', md: 'unset' },
    },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
