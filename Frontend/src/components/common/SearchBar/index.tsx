'use client'

import { useState, useRef, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import { Box, CircularProgress, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import { useLetterByLetter } from '@hooks'
import { ROUTES } from '@utils/api/routes'
import { getUserFromCookies } from '@utils/auth'
import { CustomStyles, getStyles } from '@utils/styles'
import { useQuery } from 'src/hooks/use-query'
import { QueryAllItemsData, QueryItem } from 'src/models/query.models'
import { useGlobalDiscount } from 'src/providers/global-discount-management'
import defaultStyles, { StylesClassNames } from './styles'
import { Button, ButtonProps } from '../Button'
import { SearchCard } from '../Cards/SearchCard'

export type PackageInfo = {
  id: number
  heading: string
  price: number
  discount: number
  testCount: string
  slug: string
  itemId: number
  button1: ButtonProps
  cityId: number
  itemType: string
  labId: number
}

type Props = {
  customStyles?: CustomStyles<StylesClassNames>
}

export const extractSearchDataFromQuery = (
  queryCondition: QueryItem[],
  globalDiscount: number
): PackageInfo[] => {
  return queryCondition.map((test) => ({
    heading: test.itemname,
    price: test.rate,
    testCount: `${test.test_in_package} Test included`,
    discount: test.discount || globalDiscount,
    id: test.id,
    slug: test.slug,
    itemId: test.itemid,
    button1: {
      label: 'Add',
    },
    cityId: test.city_id,
    itemType: test.item_type,
    labId: test.lab_id,
  }))
}

export function SearchBar({ customStyles }: Props) {
  const styles = getStyles(defaultStyles, customStyles)
  const [searchValue, setSearchValue] = useState<string>('')
  const [searchResults, setSearchResults] = useState<PackageInfo[]>([])
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const { discount: globalDiscount } = useGlobalDiscount()

  const { letterText: placeholderText } = useLetterByLetter({
    text: 'Search For Lab Tests/Packages',
  })
  const debounceTimer = useRef<NodeJS.Timeout | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const { queryCall, isLoading } = useQuery({
    url: ROUTES.AllItems,
    method: 'get',
    options: {
      onSuccess: (data: QueryAllItemsData) => {
        setSearchResults(
          extractSearchDataFromQuery(
            data.data.rows.slice(0, 18),
            globalDiscount
          )
        )
      },
    },
  })

  const performSearch = async (value: string) => {
    const userDetails = await getUserFromCookies()
    queryCall({
      cityId: userDetails?.cityId || '9',
      search: searchValue,
    })
      .then(() => {})
      .catch(() => {})
    const results = searchResults.filter((item) =>
      item.heading.toLowerCase().includes(value.toLowerCase())
    )
    setSearchResults(results)
    setMenuOpen(true)
    setAnchorEl(inputRef.current)
  }

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target
    setSearchValue(value)

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current)
    }
    debounceTimer.current = setTimeout(() => {
      void performSearch(value)
    }, 300)
  }

  const handleButtonClick = () => {
    setSearchValue('')
    if (menuOpen) {
      setSearchValue('')
      setMenuOpen(false)
      setAnchorEl(null)
    } else {
      inputRef.current?.focus()
    }
  }

  const handleMenuClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  const handleClose = () => {
    setMenuOpen(false)
    setAnchorEl(null)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      handleClose()
    }
  }

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
    setSearchValue('')
    return undefined
  }, [menuOpen])

  useEffect(() => {
    if (searchValue === '') {
      setSearchResults([])
      setAnchorEl(null)
      setMenuOpen(false)
    }
  }, [searchValue])

  return (
    <Box {...styles('outerWrapper')}>
      <Box {...styles('wrapper')}>
        <IconButton
          sx={{ p: '10px', pointerEvents: 'none' }}
          onClick={handleButtonClick}
          disableRipple
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          {...styles('inputbar')}
          placeholder={placeholderText}
          onChange={handleSearchInputChange}
          onFocus={() => {
            setMenuOpen(true)
            setAnchorEl(inputRef.current)
          }}
          ref={inputRef}
          value={searchValue}
        />
        {searchValue && (
          <IconButton sx={{ p: '10px' }} onClick={handleButtonClick}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>
      {anchorEl && menuOpen && (
        <Box
          ref={menuRef}
          {...styles('menu', {
            top: anchorEl.getBoundingClientRect().bottom,
          })}
          key={searchValue}
          onMouseDown={handleMenuClick}
        >
          {isLoading ? (
            <Box {...styles('loader')}>
              <CircularProgress size={24} />
            </Box>
          ) : (
            <>
              <Box {...styles('totalItemsWrapper')}>
                <Box {...styles('totalItems')}>
                  <Typography
                    {...styles('itemSearch')}
                  >{`Results for '${searchValue}'`}</Typography>
                </Box>
                {searchResults.length > 0 && (
                  <Button
                    label="View All"
                    link={`/search-results?search=${searchValue}`}
                    onClick={() => {
                      setMenuOpen(false)
                    }}
                    variant="text"
                    customStyles={{
                      button: styles('viewAllButton').sx,
                    }}
                  />
                )}
              </Box>
              {searchResults.map((result) => (
                <Box key={result.id} {...styles('menuItemsWrapper')}>
                  <SearchCard
                    {...result}
                    testCount=""
                    customStyles={{ wrapper: styles('card').sx }}
                    onClick={() => setMenuOpen(false)}
                  />
                </Box>
              ))}
            </>
          )}
        </Box>
      )}
    </Box>
  )
}
