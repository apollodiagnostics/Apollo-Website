import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  datesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  datePicker: {
    maxWidth: '193px',
    backgroundColor: 'common.white',
    borderRadius: '8px',
  },
  slotsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'left',
  },

  dateLabel: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '16px',
    color: 'common.black',
  },
  dayLabel: {
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '16px',
    color: 'common.black',
  },
  dateButton: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    alignItems: 'center',
    borderRadius: '8px',
    padding: '16px 24px',
    height: '76px',
    width: '77px',
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
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '16px',
  },
  heading: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '19px',
    color: 'custom.lightSilver',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
