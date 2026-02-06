'use client'

import { useEffect } from 'react'

const ScrollProgress = () => {
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0
      const progressBar = document.getElementById('scroll-progress')
      if (progressBar) {
        progressBar.style.width = `${scrolled}%`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div id="scroll-progress" className="scroll-progress" aria-hidden="true" />
}

export default ScrollProgress
