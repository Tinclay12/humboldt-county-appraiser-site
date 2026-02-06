'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
  overlay?: boolean
  overlayOpacity?: number
  priority?: boolean
  /** Optional blur placeholder data URL for faster perceived load */
  blurDataURL?: string
}

const ParallaxImage = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  overlay = true,
  overlayOpacity = 0.7,
  priority = false,
  blurDataURL,
}: ParallaxImageProps) => {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = imageRef.current
    if (!element) return

    gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [speed])

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ zIndex: 0 }}>
      <div
        ref={imageRef}
        className="absolute inset-0"
        style={{ willChange: 'transform', zIndex: 0 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          placeholder={blurDataURL ? 'blur' : undefined}
          blurDataURL={blurDataURL}
          className="object-cover scale-110"
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-dark-background-primary via-dark-background-primary/80 to-dark-background-primary"
          style={{ opacity: overlayOpacity, zIndex: 1 }}
        />
      )}
    </div>
  )
}

export default ParallaxImage

