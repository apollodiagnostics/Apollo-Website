import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  slotsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'left',
  },
  containedSlotButton: {
    backgroundColor: 'primary.light',
    color: 'common.lightSilver',
    border: '1px solid ',
    borderColor: 'primary.main',
  },
  outlinedSlotButton: {
    backgroundColor: 'common.white',
    color: 'custom.lightSilver',
    border: '1px solid #E8E8E8',
  },
  slotButton: {
    width: { xs: '100%', md: '169px' },
    height: '42px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '500',
    display: 'flex',
    color: '#22100D',
  },
  badge: {
    color: 'custom.silver',
    backgroundColor: 'common.white',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
