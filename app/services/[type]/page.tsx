import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  generateMetadata as generateSEOMetadata,
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo'
import { getAppraisalTypeBySlug, getServiceCategoryBySlug, appraisalTypes, serviceCategories } from '@/lib/services'
import { locations } from '@/lib/locations'
import { serviceFAQs } from '@/lib/faq'
import ContactForm from '@/components/ContactForm'
import ParallaxImage from '@/components/ui/ParallaxImage'
import PropertyTypeButton from '@/components/ui/PropertyTypeButton'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://humboldtcountyappraiser.com'

interface PageProps {
  params: Promise<{ type: string }>
}

export async function generateStaticParams() {
  const typeParams = appraisalTypes.map((type) => ({
    type: type.slug,
  }))
  const categoryParams = serviceCategories.map((category) => ({
    type: category.slug,
  }))
  return [...typeParams, ...categoryParams]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type } = await params
  const appraisalType = getAppraisalTypeBySlug(type)
  const serviceCategory = getServiceCategoryBySlug(type)
  const service = appraisalType || serviceCategory
  
  if (!service) {
    return {}
  }

  return generateSEOMetadata({
    title: `${service.title} | Humboldt County Appraiser`,
    description: service.description,
    keywords: service.keywords,
    path: `/services/${type}`,
  })
}

export default async function ServicePage({ params }: PageProps) {
  const { type } = await params
  const appraisalType = getAppraisalTypeBySlug(type)
  const serviceCategory = getServiceCategoryBySlug(type)
  const service = appraisalType || serviceCategory

  if (!service) {
    notFound()
  }

  const isAppraisalType = !!appraisalType
  const otherTypes = isAppraisalType
    ? appraisalTypes.filter((t) => t.slug !== type).slice(0, 3)
    : serviceCategories.filter((c) => c.slug !== type).slice(0, 4)
  const faqs = serviceFAQs[type] || []
  const popularLocations = locations.slice(0, 6)

  const heroImagePath = isAppraisalType ? `/images/services/${type}/hero.jpg` : null

  const localBusinessSchema = generateLocalBusinessSchema()
  const serviceSchema = generateServiceSchema(service.title, service.description)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Services', url: `${baseUrl}/services` },
    { name: service.title, url: `${baseUrl}/services/${type}` },
  ])
  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : null

  return (
    <div className="bg-dark-background-primary min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {heroImagePath && (
          <ParallaxImage
            src={heroImagePath}
            alt={`${service.title} appraisal services`}
            className="absolute inset-0"
            speed={0.2}
            overlay={true}
            overlayOpacity={0.75}
            priority={true}
          />
        )}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {isAppraisalType ? `${service.title} Services` : service.title}
            </h1>
            <p className="text-lg text-fog-300 max-w-3xl mx-auto">{service.description}</p>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  {isAppraisalType ? `Professional ${service.title} Appraisals` : `Expert ${service.title} Services`}
                </h2>
                <div className="prose prose-lg max-w-none text-fog-300">
                  {isAppraisalType ? (
                    <>
                      <p>
                        The certified appraisers at Tidwell & Associates specialize in {service.title.toLowerCase()} property 
                        valuations throughout Humboldt County, California. We understand the unique 
                        characteristics and market factors that influence {service.title.toLowerCase()} 
                        property values in our region.
                      </p>
                      <p>
                        Whether you need an appraisal for lending, legal purposes, tax planning, or 
                        personal planning, Tidwell & Associates provides accurate and reliable valuations backed by 
                        thorough market analysis and professional expertise.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        The team at Tidwell & Associates provides specialized {service.title.toLowerCase()} services throughout 
                        Humboldt County, California. We understand the unique requirements and standards 
                        for {service.title.toLowerCase()} appraisals and work closely with clients to 
                        meet their specific needs.
                      </p>
                      <p>
                        Whether you&apos;re a lender, attorney, property owner, or government agency, Tidwell & Associates 
                        delivers accurate, reliable, and compliant appraisal services that stand up to 
                        scrutiny.
                      </p>
                    </>
                  )}
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  {isAppraisalType ? 'What to Expect' : 'Our Approach'}
                </h2>
                <p className="mb-4 text-fog-300">
                  When you work with Tidwell & Associates, you can expect:
                </p>
                <ul className="space-y-3 text-fog-300">
                  {isAppraisalType ? (
                    <>
                      <li className="flex items-start">
                        <svg className="mr-3 h-6 w-6 flex-shrink-0 text-amber-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Thorough property inspection and documentation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="mr-3 h-6 w-6 flex-shrink-0 text-amber-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Comprehensive market analysis and comparable sales research</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="mr-3 h-6 w-6 flex-shrink-0 text-amber-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Detailed appraisal report meeting industry standards</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="mr-3 h-6 w-6 flex-shrink-0 text-amber-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Fast turnaround times to meet your deadlines</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start">
                        <svg className="mr-3 h-6 w-6 flex-shrink-0 text-amber-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Understanding your specific requirements and objectives</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="mr-3 h-6 w-6 flex-shrink-0 text-amber-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Adherence to industry standards and regulatory requirements</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="mr-3 h-6 w-6 flex-shrink-0 text-amber-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Thorough research and analysis</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="mr-3 h-6 w-6 flex-shrink-0 text-amber-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Clear, comprehensive reporting</span>
                      </li>
                    </>
                  )}
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

              {isAppraisalType && popularLocations.length > 0 && (
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-white">
                    {service.title} by Location
                  </h2>
                  <p className="mb-4 text-fog-300">
                    Find {service.title.toLowerCase()} services in these Humboldt County areas:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {popularLocations.map((loc) => (
                      <li key={loc.slug}>
                        <Link
                          href={`/services/${type}/${loc.slug}`}
                          className="text-amber-400 hover:text-amber-300 transition-colors"
                        >
                          {service.title} in {loc.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {otherTypes.length > 0 && (
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-white">
                    {isAppraisalType ? 'Other Property Types' : 'Other Service Categories'}
                  </h2>
                  <div className={`grid grid-cols-1 gap-4 ${isAppraisalType ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
                    {otherTypes.map((other) => {
                      if (isAppraisalType) {
                        return (
                          <PropertyTypeButton
                            key={other.slug}
                            slug={other.slug}
                            title={other.title}
                            href={`/services/${other.slug}`}
                          />
                        )
                      }
                      return (
                        <Link
                          key={other.slug}
                          href={`/services/${other.slug}`}
                          className="card rounded-lg p-4 hover:border-amber-500/50 hover:shadow-accent transition-all"
                        >
                          <h3 className="font-semibold text-white">{other.title}</h3>
                        </Link>
                      )
                    })}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar with Contact Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 card-glass rounded-xl p-6 shadow-premium-lg">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Request a {service.title} Quote
                </h3>
                <ContactForm 
                  initialAppraisalType={isAppraisalType ? type : undefined}
                  initialServiceCategory={!isAppraisalType ? type : undefined}
                  compact 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
