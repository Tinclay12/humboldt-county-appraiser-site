'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SplitImageTextProps {
  imageSrc: string
  imageAlt: string
  imageSide?: 'left' | 'right'
  children: ReactNode
  className?: string
  imagePriority?: boolean
}

const SplitImageText = ({
  imageSrc,
  imageAlt,
  imageSide = 'right',
  children,
  className = '',
  imagePriority = false,
}: SplitImageTextProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${className}`}>
      {imageSide === 'left' ? (
        <>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={imagePriority}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-background-primary/20 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={imagePriority}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-background-primary/20 to-transparent" />
          </motion.div>
        </>
      )}
    </div>
  )
}

export default SplitImageText

