'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { appraisalTypes, serviceCategories } from '@/lib/services'

export default function ServicesPageClient() {
  return (
    <div className="py-24 bg-dark-background-primary min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Appraisal Services
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-fog-300">
            Tidwell & Associates provides comprehensive real estate appraisal services for all property types and purposes 
            throughout Humboldt County, California
          </p>
        </motion.div>

        {/* Appraisal Types */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-3xl md:text-4xl font-semibold text-white"
          >
            Property Types
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {appraisalTypes.map((type, index) => (
              <Card key={type.slug} delay={index * 0.1} hover>
                <Link href={`/services/${type.slug}`}>
                  <h3 className="mb-4 text-2xl font-semibold text-white">{type.title}</h3>
                  <p className="text-fog-300">{type.description}</p>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Categories */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-3xl md:text-4xl font-semibold text-white"
          >
            Service Categories
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {serviceCategories.map((category, index) => (
              <Card key={category.slug} delay={index * 0.1} hover>
                <Link href={`/services/${category.slug}`}>
                  <h3 className="mb-4 text-2xl font-semibold text-white">{category.title}</h3>
                  <p className="text-fog-300">{category.description}</p>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 card-glass rounded-2xl p-12 text-center"
        >
          <h2 className="mb-6 text-3xl font-semibold text-white">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-xl text-fog-300">
            Contact Tidwell & Associates today for a free quote on your property appraisal needs
          </p>
          <Link href="/contact" className="btn btn-primary">
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

