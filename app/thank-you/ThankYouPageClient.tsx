'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ThankYouPageClient() {
  return (
    <div className="py-24 bg-dark-background-primary min-h-screen flex items-center">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-400/10 border-2 border-amber-500/30"
        >
          <motion.svg
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-12 w-12 text-amber-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        >
          Thank You!
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 text-xl text-fog-300"
        >
          Tidwell & Associates has received your appraisal request and will get back to you within 24-48 hours 
          with a quote for your property.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card rounded-2xl p-8 mb-12 text-left"
        >
          <h2 className="mb-6 text-2xl font-semibold text-white">What Happens Next?</h2>
          <ol className="space-y-4 text-fog-300">
            {[
              { step: 1, text: "The team at Tidwell & Associates will review your property details and appraisal requirements" },
              { step: 2, text: "We&apos;ll prepare a detailed quote based on your specific needs" },
              { step: 3, text: "You&apos;ll receive an email from Tidwell & Associates with the quote and next steps" },
            ].map((item) => (
              <li key={item.step} className="flex items-start">
                <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-600/20 text-amber-400 font-semibold flex-shrink-0">
                  {item.step}
                </span>
                <span className="text-lg pt-1">{item.text}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/" className="btn btn-primary">
            Return to Home
          </Link>
          <Link href="/services" className="btn btn-outline">
            View Our Services
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

