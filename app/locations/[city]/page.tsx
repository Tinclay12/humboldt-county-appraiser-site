import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  generateMetadata as generateSEOMetadata,
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo'
import { IMAGE_BLUR_PLACEHOLDER } from '@/lib/constants'
import { getLocationBySlug, locations } from '@/lib/locations'
import { getLocationGalleryImages, getLocationImagePath } from '@/lib/locationImages'
import { appraisalTypes } from '@/lib/services'
import { locationContent, getLocationFaqs } from '@/lib/locationContent'
import ContactForm from '@/components/ContactForm'
import ParallaxImage from '@/components/ui/ParallaxImage'

interface PageProps {
  params: Promise<{ city: string }>
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://humboldtcountyappraiser.com'

export async function generateStaticParams() {
  return locations.map((location) => ({
    city: location.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params
  const location = getLocationBySlug(city)

  if (!location) {
    return {}
  }

  return generateSEOMetadata({
    title: `${location.name} Real Estate Appraiser | Professional Property Appraisals`,
    description: location.description,
    keywords: location.keywords,
    path: `/locations/${city}`,
  })
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params
  const location = getLocationBySlug(city)

  if (!location) {
    notFound()
  }

  const content = locationContent[city]
  const faqs = getLocationFaqs(city, location.name)
  const nearbySlugs = content?.nearbySlugs || []
  const nearbyLocations = nearbySlugs
    .map((slug) => locations.find((l) => l.slug === slug))
    .filter(Boolean) as typeof locations

  const localBusinessSchema = generateLocalBusinessSchema(location.name)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Locations', url: `${baseUrl}/locations` },
    { name: location.name, url: `${baseUrl}/locations/${city}` },
  ])
  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : null

  const heroImagePath = getLocationImagePath(city)
  const galleryImages = getLocationGalleryImages(city)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="bg-dark-background-primary min-h-screen">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <ParallaxImage
            src={heroImagePath}
            alt={`${location.name}, California real estate appraisal services`}
            className="absolute inset-0"
            speed={0.2}
            overlay
            overlayOpacity={0.75}
            priority
            blurDataURL={IMAGE_BLUR_PLACEHOLDER}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-normal text-white md:text-5xl lg:text-6xl">
                Real Estate Appraiser in {location.name}, California
              </h1>
              <p className="text-lg text-fog-300 max-w-3xl mx-auto">{location.description}</p>
            </div>
          </div>
        </section>

        <div className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-white">
                    Professional Appraisal Services in {location.name}
                  </h2>
                  <div className="prose prose-lg max-w-none text-fog-300">
                    <p>
                      When you need a reliable and experienced real estate appraiser in{' '}
                      {location.name}, Humboldt County, you can count on Tidwell & Associates for
                      accurate and professional property valuations. We understand the unique
                      characteristics of the {location.name} real estate market and provide
                      comprehensive appraisal services for all property types.
                    </p>
                    <p>
                      Whether you&apos;re buying, selling, refinancing, or need an appraisal for
                      legal or tax purposes, the certified appraisers at Tidwell & Associates have
                      the local market knowledge and expertise to deliver accurate valuations you
                      can trust.
                    </p>
                  </div>
                </section>

                {content?.about && content.about.length > 0 && (
                  <section>
                    <h2 className="mb-4 text-2xl font-semibold text-white">About {location.name}</h2>
                    <div className="prose prose-lg max-w-none text-fog-300 space-y-4">
                      {content.about.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </section>
                )}

                {galleryImages.length > 0 && (
                  <section>
                    <h2 className="mb-4 text-2xl font-semibold text-white">
                      Scenic {location.name}
                    </h2>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                      <Image
                        src={galleryImages[0]}
                        alt={`${location.name}, California`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        placeholder="blur"
                        blurDataURL={IMAGE_BLUR_PLACEHOLDER}
                      />
                    </div>
                    <p className="mt-2 text-sm text-fog-400">
                      {location.name}, Humboldt County, California
                    </p>
                  </section>
                )}

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-white">
                    Services We Offer in {location.name}
                  </h2>
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {appraisalTypes.map((type) => (
                      <li key={type.slug} className="flex items-start">
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
                        <Link
                          href={`/services/${type.slug}/${city}`}
                          className="text-fog-300 hover:text-amber-400 transition-colors"
                        >
                          {type.title}
                        </Link>
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

                {nearbyLocations.length > 0 && (
                  <section>
                    <h2 className="mb-4 text-2xl font-semibold text-white">Nearby Areas</h2>
                    <p className="mb-4 text-fog-300">
                      We also serve these communities near {location.name}:
                    </p>
                    <ul className="flex flex-wrap gap-3">
                      {nearbyLocations.map((loc) => (
                        <li key={loc.slug}>
                          <Link
                            href={`/locations/${loc.slug}`}
                            className="text-amber-400 hover:text-amber-300 transition-colors"
                          >
                            {loc.name}
                          </Link>
                          {loc !== nearbyLocations[nearbyLocations.length - 1] && (
                            <span className="text-fog-500 mx-1">·</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-white">
                    Why Choose Us for Your {location.name} Appraisal
                  </h2>
                  <div className="prose prose-lg max-w-none text-fog-300">
                    <p>
                      The team of certified appraisers at Tidwell & Associates has extensive
                      experience with properties in {location.name} and throughout Humboldt County.
                      We understand local market conditions, property values, and the factors that
                      influence real estate valuations in your area.
                    </p>
                    <p>
                      Tidwell & Associates is committed to providing accurate, timely, and
                      professional appraisal services that meet your specific needs, whether for
                      lending, legal, tax, or personal planning purposes.
                    </p>
                  </div>
                </section>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 card-glass rounded-xl p-6 shadow-premium-lg">
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    Request a Quote for {location.name}
                  </h3>
                  <ContactForm compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
