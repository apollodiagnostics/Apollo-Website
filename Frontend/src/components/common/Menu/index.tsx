import * as React from 'react'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import { citySlugPlaceholder, defaultCity, LinkData } from '@models'
import { createSlugStringFromSlugData } from '@utils/common'
import { CustomStyles, getStyles } from '@utils/styles'
import { useUserState } from 'src/providers/login-state-management'
import defaultStyles, { StylesClassNames } from './styles'

export type MenuData = {
  options: LinkData[]
  title: string
  icon?: React.ReactNode
}
type MenuProps = MenuData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function Menu({ customStyles, title, options, icon }: MenuProps) {
  const [dropDownState, setDropDownState] = React.useState<boolean>(false)

  const dropDownOpen = () => {
    setDropDownState(true)
  }

  const dropDownClose = () => {
    setDropDownState(false)
  }

  const styles = getStyles(defaultStyles, customStyles)

  const groupOptions = (options: LinkData[]) => {
    const groupedOptions: LinkData[][] = []
    for (let i = 0; i < options.length; i += 5) {
      groupedOptions.push(options.slice(i, i + 5))
    }
    return groupedOptions
  }

  const { userDetails } = useUserState()

  function replaceCitySlug(link: string) {
    if (link.includes(citySlugPlaceholder)) {
      return link.replace(
        citySlugPlaceholder,
        createSlugStringFromSlugData(
          userDetails?.cityName || defaultCity.name,
          userDetails?.cityId || defaultCity.id
        )
      )
    }
    return link
  }

  return (
    <Box
      {...styles('menuWrapper')}
      onMouseEnter={dropDownOpen}
      onMouseLeave={dropDownClose}
    >
      <Button
        variant="text"
        className="menuButton"
        aria-label="profile"
        {...styles(
          'button',
          dropDownState
            ? { backgroundColor: 'custom.lightMaroon', color: 'primary.main' }
            : {}
        )}
        endIcon={<KeyboardArrowDownIcon {...styles('icon')} />}
        onMouseEnter={dropDownOpen}
      >
        {title}
        {icon &&
          React.cloneElement(icon as React.ReactElement, {
            ...styles('personIcon'),
          })}
      </Button>
      {dropDownState && (
        <Box {...styles('options')} onMouseLeave={dropDownClose}>
          {groupOptions(options).map((group) => (
            <Box {...styles('groupOptionsWrapper')} key={group[0].label}>
              {group.map(({ label, link }) => (
                <Box key={label} {...styles('groupOptions')}>
                  <Link
                    href={replaceCitySlug(link)}
                    style={{ textDecoration: 'none' }}
                  >
                    <Box onClick={dropDownClose} {...styles('menuItem')}>
                      {label}
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}
