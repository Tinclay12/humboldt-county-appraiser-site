'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

export default function ContactPageClient() {
  return (
    <div className="py-24 bg-dark-background-primary min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Request Your Appraisal Quote
          </h1>
          <p className="text-xl text-fog-300">
            Fill out the form below and the team at Tidwell & Associates will get back to you promptly with a quote for your appraisal needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="card-glass rounded-2xl p-8 md:p-12 shadow-premium-lg mb-16"
        >
          <ContactForm />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="card rounded-xl p-8"
          >
            <h3 className="mb-6 text-2xl font-semibold text-white">Why Choose Us</h3>
            <p className="mb-4 text-fog-300 text-lg">
              When you work with Tidwell & Associates, you benefit from:
            </p>
            <ul className="space-y-4 text-fog-300">
              {[
                'Licensed & certified appraisers',
                'Fast turnaround times',
                'Serving all of Humboldt County',
                'All property types accepted',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="mr-3 h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="card rounded-xl p-8"
          >
            <h3 className="mb-6 text-2xl font-semibold text-white">What to Expect</h3>
            <ol className="space-y-4 text-fog-300 list-decimal list-inside">
              {[
                'Submit your request using the form',
                "We&apos;ll review your property details",
                'Receive a quote within 24-48 hours',
                'Schedule your appraisal at your convenience',
              ].map((item, index) => (
                <li key={index} className="text-lg">
                  {item}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

