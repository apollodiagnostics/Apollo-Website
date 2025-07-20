'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Box } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type PaginationData = {
  currentPage: number
  totalItems: number
  limit?: number
}

type PaginationProps = PaginationData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function PaginationSection({
  currentPage,
  totalItems,
  limit = 12,
  customStyles,
}: PaginationProps) {
  const styles = getStyles(defaultStyles, customStyles)
  const router = useRouter()
  const [userLimit, setUserLimit] = useState(limit)
  const [currentPageState, setCurrentPageState] = useState(currentPage)

  useEffect(() => {
    setUserLimit(limit)
    setCurrentPageState(currentPage)
  }, [limit, currentPage])

  const totalPages = Math.ceil(totalItems / userLimit)

  const getUpdatedQueryParams = (newParams: Record<string, string>) => {
    const params = new URLSearchParams(window.location.search)
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })
    return params.toString()
  }

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    const offset = (page - 1) * userLimit
    setCurrentPageState(page)
    const updatedParams = getUpdatedQueryParams({
      limit: userLimit.toString(),
      offset: offset.toString(),
    })
    router.replace(`?${updatedParams}`)
  }

  return (
    <Box {...styles('wrapper')}>
      <Pagination
        count={totalPages || 1}
        page={currentPageState}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        disabled={!totalPages}
        {...styles('pages')}
      />
    </Box>
  )
}
