'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, Fade, Typography } from '@mui/material'
import { LinkData } from '@models'
import { PaginationSection } from '@components/common'
import { BlogsCard, BlogsCardData } from '@components/common/Cards/BlogsCard'
import { extractSlugDataFromString } from '@utils/common'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type BlogsSectionData = {
  heading: string
  category: LinkData[]
  totalCards: number
  cards: BlogsCardData[]
}

export function BlogsSection({
  heading,
  category,
  totalCards,
  cards,
}: BlogsSectionData) {
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [visibleCategories, setVisibleCategories] = useState(6)
  const [initialLoad, setInitialLoad] = useState(true)

  const toggleCategories = () => {
    setShowAllCategories((prev) => !prev)
  }

  useEffect(() => {
    if (showAllCategories) {
      setVisibleCategories(category.length)
    } else {
      setVisibleCategories(6)
    }
  }, [showAllCategories, category])

  const styles = getStyles(defaultStyle)
  const pathname = usePathname()
  const categoryString = pathname.split('/').pop()
  const catIdNumber = extractSlugDataFromString(categoryString || '').id

  useEffect(() => {
    setInitialLoad(false)
  }, [])

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('headingWrapper')}>
        <Typography {...styles('heading')}>{heading}</Typography>
      </Box>
      <Box {...styles('categoryWrapper')}>
        <Fade in={showAllCategories || !initialLoad}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {category.slice(0, visibleCategories).map((item) => (
              <Link
                href={item.link}
                key={item.label}
                style={{
                  textDecoration: 'none',
                  marginRight: '8px',
                  marginBottom: '8px',
                }}
              >
                <Typography
                  {...styles('category')}
                  {...(item.id === parseInt(catIdNumber || '0', 10)
                    ? styles(['category', 'active'])
                    : styles('category'))}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
            <Typography {...styles('allCategories')} onClick={toggleCategories}>
              {showAllCategories ? 'Show Less' : 'Show More...'}
            </Typography>
          </Box>
        </Fade>
      </Box>
      <Box {...styles('cardWrapper')}>
        {cards.map((item) => (
          <BlogsCard {...item} key={item.heading} />
        ))}
      </Box>
      <PaginationSection totalItems={totalCards} currentPage={1} />
    </Box>
  )
}
