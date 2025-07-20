import React from 'react'
import { Box } from '@mui/material'
import DOMPurify from 'isomorphic-dompurify'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type HtmlPurifierData = {
  html: string
}

export type HtmlPurifierProps = HtmlPurifierData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function HtmlPurifier({ html, customStyles }: HtmlPurifierProps) {
  const cleanHtml = DOMPurify.sanitize(html)
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box
      {...styles('wrapper')}
      dangerouslySetInnerHTML={{
        __html: `${cleanHtml}`,
      }}
    />
  )
}
