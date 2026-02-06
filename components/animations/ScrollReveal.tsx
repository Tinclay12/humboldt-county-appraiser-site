'use client'

import { useEffect, useRef } from 'react'
import { scrollReveal } from '@/lib/animations'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  distance?: number
  origin?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

const ScrollReveal = ({
  children,
  delay,
  duration,
  distance,
  origin,
  className,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      scrollReveal(ref.current, { delay, duration, distance, origin }).catch(console.error)
    }
  }, [delay, duration, distance, origin])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default ScrollReveal
