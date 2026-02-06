import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import JsonLdScript from '@/components/JsonLdScript'
import ParallaxImage from '@/components/ui/ParallaxImage'
import { IMAGE_BLUR_PLACEHOLDER } from '@/lib/constants'
import { getLocationImagePath } from '@/lib/locationImages'
import type { Location } from '@/types'
interface ServiceLocationContentProps {
  serviceSlug: string
  serviceTitle: string
  serviceDescription: string
  city: string
  location: Location
  content: { about?: string[]; faqs?: Array<{ question: string; answer: string }> } | undefined
  faqs: Array<{ question: string; answer: string }>
  otherLocations: Location[]
  localBusinessSchema: object
  serviceSchema: object
  faqSchema: object | null
}

const ServiceLocationContent = ({
  serviceSlug,
  serviceTitle,
  serviceDescription,
  city,
  location,
  content,
  faqs,
  otherLocations,
  localBusinessSchema,
  serviceSchema,
  faqSchema,
}: ServiceLocationContentProps) => {
  const heroImagePath = getLocationImagePath(city)

  return (
    <div className="bg-dark-background-primary min-h-screen">
      <JsonLdScript data={localBusinessSchema} />
      <JsonLdScript data={serviceSchema} />
      {faqSchema && <JsonLdScript data={faqSchema} />}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <ParallaxImage
          src={heroImagePath}
          alt={`${serviceTitle} services in ${location.name}, California`}
          className="absolute inset-0"
          speed={0.2}
          overlay
          overlayOpacity={0.75}
          priority
          blurDataURL={IMAGE_BLUR_PLACEHOLDER}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-normal text-white md:text-5xl lg:text-6xl">
              {serviceTitle} in {location.name}, California
            </h1>
            <p className="text-lg text-fog-300 max-w-3xl mx-auto">
              Expert {serviceTitle.toLowerCase()} services in {location.name}. Professional property
              valuations from Tidwell & Associates.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  {serviceTitle} Services in {location.name}
                </h2>
                <div className="prose prose-lg max-w-none text-fog-300">
                  <p>
                    When you need a reliable {serviceTitle.toLowerCase()} in {location.name},
                    Humboldt County, Tidwell & Associates delivers accurate and professional property
                    valuations. Our certified appraisers understand the {location.name} market and
                    provide comprehensive {serviceTitle.toLowerCase()} services.
                  </p>
                  <p>
                    Whether you&apos;re buying, selling, refinancing, or need an appraisal for legal
                    or tax purposes, our team has the local expertise to deliver valuations you can
                    trust.
                  </p>
                </div>
              </section>

              {content?.about && content.about.length > 0 && (
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-white">
                    About {location.name}
                  </h2>
                  <div className="prose prose-lg max-w-none text-fog-300 space-y-4">
                    {content.about.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </section>
              )}

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  {serviceTitle} in {location.name} — What to Expect
                </h2>
                <ul className="space-y-3 text-fog-300">
                  {[
                    'Thorough property inspection and documentation',
                    'Comprehensive market analysis and comparable sales research',
                    'Detailed appraisal report meeting industry standards',
                    'Fast turnaround times to meet your deadlines',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <svg
                        className="mr-3 h-6 w-6 flex-shrink-0 text-amber-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {faqs.length > 0 && (
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-white">
                    Frequently Asked Questions
                  </h2>
                  <dl className="space-y-4 text-fog-300">
                    {faqs.map((faq) => (
                      <div key={faq.question}>
                        <dt className="font-semibold text-white mb-1">{faq.question}</dt>
                        <dd>{faq.answer}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  {serviceTitle} in Other Humboldt County Areas
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {otherLocations.map((loc) => (
                    <li key={loc.slug}>
                      <Link
                        href={`/services/${serviceSlug}/${loc.slug}`}
                        className="text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        {serviceTitle} in {loc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 card-glass rounded-xl p-6 shadow-premium-lg">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Request a {serviceTitle} Quote in {location.name}
                </h3>
                <ContactForm initialAppraisalType={serviceSlug} compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceLocationContent
