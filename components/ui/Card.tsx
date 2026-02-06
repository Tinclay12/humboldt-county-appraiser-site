'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
  delay?: number
}

const Card = ({ children, className = '', hover = true, glass = false, delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`${glass ? 'card-glass' : 'card'} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card

