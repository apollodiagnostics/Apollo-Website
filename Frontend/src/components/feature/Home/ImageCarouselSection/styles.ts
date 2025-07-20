import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '98vw',
    maxWidth: '1440px',
    height: { xs: 'unset', md: '454px' },
    margin: '50px auto 0px auto',
    paddingTop: '12px',
    borderRadius: '24px',
    '.swiper-pagination': {
      display: { xs: 'none', sm: 'block' },
    },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
