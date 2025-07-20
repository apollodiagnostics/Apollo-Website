import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { LinkData } from '@models'
import {
  Button,
  ButtonProps,
  SectionHeader,
  SectionHeaderData,
} from '@components/common'
import { Image } from '@components/common/Image'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type TestByBodyOrgansProps = {
  sectionHeader: SectionHeaderData
  viewAllButton: ButtonProps
  tests: LinkData[]
}

export function TestsByBodyOrgans({
  sectionHeader,
  tests,
  viewAllButton,
}: TestByBodyOrgansProps) {
  const styles = getStyles(defaultStyles)
  return (
    <Box {...styles('mainWrapper')}>
      <Box {...styles('wrapper')}>
        <SectionHeader
          {...sectionHeader}
          customStyles={{
            wrapper: styles('sectionHeaderWrapper').sx,
            infoContainer: styles('infoWrapper').sx,
          }}
        />
        <Box {...styles('testContainer')}>
          {tests.map((test) => (
            <Box {...styles('test')} key={test.label}>
              <Link
                href={test.link}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  gap: '14px',
                }}
              >
                {test.image && (
                  <Image
                    {...test.image}
                    fill
                    customStyles={{ wrapper: styles('image').sx }}
                  />
                )}
                <Typography variant="h6" {...styles('title')}>
                  {test.label}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>
        <Button
          {...viewAllButton}
          customStyles={{ button: styles('button').sx }}
        />
      </Box>
    </Box>
  )
}
