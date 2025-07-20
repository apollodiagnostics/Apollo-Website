import { Autocomplete, ListItemText, TextField } from '@mui/material'
import { InputData } from '@models'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type SearchSelectType = {
  options: InputData[]
  placeHolder: string
  value?: InputData
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: InputData | null
  ) => void
}
type Props = SearchSelectType & {
  customStyles?: CustomStyles<StylesClassNames>
}
export function SearchSelect({ placeHolder, options, value, onChange }: Props) {
  const styles = getStyles(defaultStyles)

  return (
    <Autocomplete
      key={value ? value.value : ''}
      value={value}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          {...styles('autoCompleteTextField')}
          placeholder={placeHolder}
        />
      )}
      renderOption={(props, item) => (
        <li {...props} key={item.value}>
          <ListItemText>{item.label}</ListItemText>
        </li>
      )}
      onChange={onChange}
      clearIcon={null}
      {...styles('searchCity')}
    />
  )
}
