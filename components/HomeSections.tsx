'use client'

import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import ImageCard from '@/components/ui/ImageCard'
import RevealSection from '@/components/animations/RevealSection'
import { IMAGE_BLUR_PLACEHOLDER } from '@/lib/constants'
import { locations } from '@/lib/locations'
import { getLocationImagePath } from '@/lib/locationImages'
import { appraisalTypes } from '@/lib/services'

const WHY_CHOOSE_ITEMS = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: 'Certified & Experienced',
    description:
      "Tidwell & Associates' certified appraisers have extensive experience in Humboldt County real estate markets",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: 'Fast Turnaround',
    description: 'Quick and efficient service to meet your deadlines and closing dates',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
    title: 'Comprehensive Coverage',
    description: 'Serving all property types and purposes throughout Humboldt County',
  },
]

const HomeSections = () => {
  const featuredServices = appraisalTypes.slice(0, 3)

  return (
    <>
      {/* Services Overview */}
      <section className="py-24 bg-dark-background-secondary relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-16">
            <h2 className="mb-6 text-4xl md:text-5xl font-normal text-white">
              Comprehensive Appraisal Services
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-fog-300">
              Tidwell & Associates provides expert appraisals for all property types and purposes
              throughout Humboldt County
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <RevealSection key={service.slug} delay={index * 100}>
                <Link href={`/services/${service.slug}`}>
                  <ImageCard
                    src={`/images/services/${service.slug}/hero.jpg`}
                    alt={`${service.title} appraisal service in Humboldt County`}
                    title={service.title}
                    description={service.description}
                    className="h-full"
                  />
                </Link>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="mt-16 text-center" delay={300}>
            <Link href="/services" className="btn btn-outline">
              View All Services
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-24 bg-dark-background-primary relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-600/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-16">
            <h2 className="mb-6 text-4xl md:text-5xl font-normal text-white">
              Serving All of Humboldt County
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-fog-300">
              Expert appraisals available throughout Humboldt County, California
            </p>
          </RevealSection>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {locations.map((location, index) => (
              <RevealSection key={location.slug} delay={index * 50}>
                <Link href={`/locations/${location.slug}`}>
                  <ImageCard
                    src={getLocationImagePath(location.slug)}
                    alt={`${location.name}, California real estate appraisal services`}
                    title={location.name}
                    className="h-full min-h-[150px]"
                    priority={index < 4}
                    blurDataURL={IMAGE_BLUR_PLACEHOLDER}
                  />
                </Link>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="mt-16 text-center" delay={200}>
            <Link href="/locations" className="btn btn-outline">
              View All Locations
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-dark-background-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-white">
              Why Choose Our Appraisal Services
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {WHY_CHOOSE_ITEMS.map((item, index) => (
              <RevealSection key={item.title} delay={index * 150}>
                <div className="text-center">
                  <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-600/20 border border-amber-500/30">
                    <svg
                      className="h-10 w-10 text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="text-fog-300 text-lg">{item.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="relative py-24 bg-gradient-mesh overflow-hidden">
        <div className="absolute inset-0 bg-amber-600/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="mb-6 text-4xl md:text-5xl font-normal text-white">
                Request Your Appraisal Quote
              </h2>
              <p className="text-xl text-fog-200">
                Get started with a free quote from Tidwell & Associates for your property appraisal
                needs
              </p>
            </div>

            <RevealSection delay={150}>
              <div className="card-glass rounded-2xl p-8 md:p-12 shadow-premium-lg">
                <ContactForm />
              </div>
            </RevealSection>
          </RevealSection>
        </div>
      </section>
    </>
  )
}

export default HomeSections
