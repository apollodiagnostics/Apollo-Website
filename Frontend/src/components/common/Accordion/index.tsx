'use client'

import React, { ReactNode } from 'react'
// import document from 'next/document'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import { Box, Collapse, Typography } from '@mui/material'
import { DocumentData, ImageType } from '@models'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'
import { HtmlPurifier } from '../HtmlPurifier'
import { Image } from '../Image'

export type AccordionData = {
  icon?: ImageType
  label: string
  document?: DocumentData
  isOpen?: boolean
  children?: ReactNode
  onChange?: () => void
}

type AccordionProps = AccordionData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function Accordion({
  document,
  icon,
  label,
  isOpen,
  onChange,
  customStyles,
  children,
}: AccordionProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box
        {...styles('toggleWrapper', {
          borderRadius: isOpen ? '12px 12px 0px 0px' : '12px',
        })}
        onClick={onChange}
      >
        <Box {...styles('infoContainer')}>
          {icon && (
            <Image
              {...icon}
              fill
              customStyles={{ wrapper: styles('labelImage').sx }}
            />
          )}

          <Typography
            variant="body1"
            {...styles('label', {
              fontWeight: isOpen ? '600' : '500',
            })}
          >
            {label}
          </Typography>
        </Box>
        <Box>
          {isOpen ? (
            <KeyboardArrowUpRoundedIcon {...styles('icons')} />
          ) : (
            <KeyboardArrowDownRoundedIcon {...styles('icons')} />
          )}
        </Box>
      </Box>
      <Collapse in={isOpen}>
        <Box {...styles('drawer')}>
          {/* {document && document !== '' && (
            <DocumentRenderer document={document} />
          )} */}
          {document && document !== '' && <HtmlPurifier html={document} />}
          {children}
        </Box>
      </Collapse>
    </Box>
  )
}
