// GSAP imports are handled client-side only to avoid SSR issues

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
}

export const slideInFromRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

export const slideInFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

// GSAP Scroll Reveal Animation (requires dynamic import client-side)
export const scrollReveal = async (element: string | HTMLElement, options?: {
  delay?: number
  duration?: number
  distance?: number
  origin?: 'top' | 'bottom' | 'left' | 'right'
}) => {
  if (typeof window === 'undefined') return

  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  const {
    delay = 0,
    duration = 0.8,
    distance = 60,
    origin = 'bottom',
  } = options || {}

  const directions: Record<string, { x?: number; y?: number }> = {
    top: { y: -distance },
    bottom: { y: distance },
    left: { x: -distance },
    right: { x: distance },
  }

  const dir = directions[origin]

  gsap.fromTo(
    element,
    {
      opacity: 0,
      ...dir,
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

// Parallax effect (requires dynamic import client-side)
export const parallax = async (element: string | HTMLElement, speed: number = 0.5) => {
  if (typeof window === 'undefined') return

  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

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
}

