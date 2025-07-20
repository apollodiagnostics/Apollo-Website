'use client'

import { useState, useEffect, useCallback } from 'react'

const useInView = (id: string, offset = 200) => {
  const [inView, setInView] = useState<boolean>(false)

  const checkInView = useCallback(() => {
    const element = document.getElementById(id)
    if (element) {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const isInView = rect.top < windowHeight - offset && rect.bottom > offset
      setInView(isInView)
    }
  }, [id, offset])

  useEffect(() => {
    checkInView()

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      {
        rootMargin: `${offset}px 0px`,
      }
    )

    const element = document.getElementById(id)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [checkInView, id, offset])

  return [inView] as const
}

export default useInView
