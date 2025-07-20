'use client'

import { useEffect, useState } from 'react'

type Params = {
  text: string
}

export const useLetterByLetter = ({ text }: Params) => {
  const [index, setIndex] = useState(0)
  const [letterText, setLetterText] = useState('')

  // Reset text when `text` changes
  useEffect(() => {
    setLetterText('')
    setIndex(0)
  }, [text])

  // Animate letters one by one
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setLetterText((prev) => prev + text.charAt(index))
        setIndex(index + 1)
      }, 70)

      return () => clearTimeout(timeout)
    }

    // Restart after 4 seconds when the animation is complete
    const restartTimeout = setTimeout(() => {
      setLetterText('')
      setIndex(0)
    }, 2500)

    return () => clearTimeout(restartTimeout)
  }, [index, text])

  return { letterText }
}
