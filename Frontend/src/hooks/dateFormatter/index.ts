'use client'

import { useEffect, useState } from 'react'

function useDateFormatter(dateString: string | undefined): string {
  const [formattedDate, setFormattedDate] = useState<string>('')

  useEffect(() => {
    // const date = new Date(dateString || '')
    // const options: Intl.DateTimeFormatOptions = {
    //   year: 'numeric',
    //   month: 'short',
    //   day: 'numeric',
    // }
    // setFormattedDate(date.toLocaleDateString('en-US', options))
    setFormattedDate(dateString?.split('T')[0] || '')
  }, [dateString])

  return formattedDate
}

export default useDateFormatter
