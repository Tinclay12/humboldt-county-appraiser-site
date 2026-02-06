'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface PropertyTypeButtonProps {
  slug: string
  title: string
  href: string
}

const getShapeStyle = (slug: string): string => {
  const shapes: Record<string, string> = {
    residential: 'polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)', // House shape with triangle roof
    multifamily: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Tall rectangle (apartment building)
    commercial: 'polygon(0% 15%, 35% 0%, 65% 0%, 100% 15%, 100% 100%, 0% 100%)', // Office building with varied heights
    industrial: 'polygon(0% 20%, 100% 20%, 100% 100%, 0% 100%)', // Wide, low warehouse shape
    agricultural: 'polygon(0% 30%, 50% 0%, 100% 30%, 100% 100%, 0% 100%)', // Barn shape with trapezoid roof
    'vacant-land': 'polygon(5% 10%, 95% 5%, 100% 90%, 10% 95%)', // Irregular land plot shape
  }
  return shapes[slug] || 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
}

const getPropertyIcon = (slug: string): JSX.Element => {
  const icons: Record<string, JSX.Element> = {
    residential: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="currentColor">
        <path d="M50 10 L90 35 L90 85 L10 85 L10 35 Z" />
        <rect x="35" y="50" width="15" height="20" />
        <rect x="50" y="50" width="15" height="20" />
        <rect x="42" y="65" width="16" height="20" />
      </svg>
    ),
    multifamily: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="currentColor">
        <rect x="10" y="20" width="80" height="75" />
        <rect x="20" y="35" width="12" height="15" />
        <rect x="35" y="35" width="12" height="15" />
        <rect x="50" y="35" width="12" height="15" />
        <rect x="65" y="35" width="12" height="15" />
        <rect x="20" y="55" width="12" height="15" />
        <rect x="35" y="55" width="12" height="15" />
        <rect x="50" y="55" width="12" height="15" />
        <rect x="65" y="55" width="12" height="15" />
        <rect x="20" y="75" width="12" height="15" />
        <rect x="35" y="75" width="12" height="15" />
        <rect x="50" y="75" width="12" height="15" />
        <rect x="65" y="75" width="12" height="15" />
      </svg>
    ),
    commercial: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="currentColor">
        <rect x="10" y="30" width="25" height="65" />
        <rect x="40" y="15" width="25" height="80" />
        <rect x="70" y="40" width="20" height="55" />
        <rect x="15" y="40" width="8" height="10" />
        <rect x="25" y="40" width="8" height="10" />
        <rect x="45" y="25" width="8" height="10" />
        <rect x="55" y="25" width="8" height="10" />
        <rect x="75" y="50" width="8" height="10" />
        <rect x="85" y="50" width="8" height="10" />
      </svg>
    ),
    industrial: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="currentColor">
        <rect x="5" y="25" width="90" height="70" />
        <rect x="15" y="40" width="20" height="25" />
        <rect x="40" y="40" width="20" height="25" />
        <rect x="65" y="40" width="20" height="25" />
        <rect x="15" y="70" width="20" height="20" />
        <rect x="40" y="70" width="20" height="20" />
        <rect x="65" y="70" width="20" height="20" />
      </svg>
    ),
    agricultural: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="currentColor">
        <path d="M10 40 L50 10 L90 40 L90 90 L10 90 Z" />
        <rect x="20" y="50" width="15" height="30" />
        <rect x="40" y="50" width="20" height="40" />
        <path d="M50 50 L50 90" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="65" cy="70" r="5" />
      </svg>
    ),
    'vacant-land': (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="currentColor">
        <path d="M10 20 L90 10 L95 80 L15 85 Z" />
        <circle cx="30" cy="40" r="3" />
        <circle cx="60" cy="35" r="3" />
        <circle cx="75" cy="50" r="3" />
        <path d="M25 55 Q35 50 45 55 T65 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  }
  return icons[slug] || (
    <svg viewBox="0 0 100 100" className="w-12 h-12" fill="currentColor">
      <rect x="10" y="10" width="80" height="80" />
    </svg>
  )
}

const PropertyTypeButton = ({ slug, title, href }: PropertyTypeButtonProps) => {
  const shapeStyle = getShapeStyle(slug)
  const icon = getPropertyIcon(slug)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      window.location.href = href
    }
  }

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="h-32 sm:h-36"
    >
      <Link
        href={href}
        className="card block h-full p-3 sm:p-4 hover:border-amber-500/50 hover:shadow-accent transition-all relative overflow-hidden group"
        style={{
          clipPath: shapeStyle,
        }}
        aria-label={`View ${title} services`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="text-amber-500 mb-2 group-hover:text-amber-400 transition-colors">
            {icon}
          </div>
          <h3 className="font-semibold text-white text-xs sm:text-sm group-hover:text-amber-300 transition-colors px-1">
            {title}
          </h3>
        </div>
      </Link>
    </motion.div>
  )
}

export default PropertyTypeButton
