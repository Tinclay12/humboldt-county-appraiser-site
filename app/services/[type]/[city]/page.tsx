import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  generateMetadata as generateSEOMetadata,
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
} from '@/lib/seo'
import { getLocationBySlug, locations } from '@/lib/locations'
import { getAppraisalTypeBySlug, appraisalTypes } from '@/lib/services'
import { isValidServiceLocationCombo } from '@/lib/combos'
import { locationContent, getLocationFaqs } from '@/lib/locationContent'
import { serviceFAQs } from '@/lib/faq'

const mergeFaqs = (
  serviceFaqs: Array<{ question: string; answer: string }>,
  locationFaqs: Array<{ question: string; answer: string }>
): Array<{ question: string; answer: string }> => {
  const questionSet = new Set(serviceFaqs.map((f) => f.question))
  const uniqueLocationFaqs = locationFaqs.filter((f) => !questionSet.has(f.question))
  return [...serviceFaqs, ...uniqueLocationFaqs]
}
import ServiceLocationContent from './ServiceLocationContent'

interface PageProps {
  params: Promise<{ type: string; city: string }>
}

export async function generateStaticParams() {
  const params: { type: string; city: string }[] = []
  for (const t of appraisalTypes) {
    for (const location of locations) {
      params.push({ type: t.slug, city: location.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type, city } = await params
  if (!isValidServiceLocationCombo(type, city)) return {}

  const service = getAppraisalTypeBySlug(type)
  const location = getLocationBySlug(city)
  if (!service || !location) return {}

  const title = `${service.title} in ${location.name}, CA | Humboldt County Appraiser`
  const description = `Expert ${service.title.toLowerCase()} services in ${location.name}, California. Professional property valuations from Tidwell & Associates. ${service.description}`

  return generateSEOMetadata({
    title,
    description,
    keywords: [...service.keywords, ...location.keywords],
    path: `/services/${type}/${city}`,
  })
}

export default async function ServiceLocationPage({ params }: PageProps) {
  const { type, city } = await params

  if (!isValidServiceLocationCombo(type, city)) {
    notFound()
  }

  const service = getAppraisalTypeBySlug(type)
  const location = getLocationBySlug(city)
  if (!service || !location) notFound()

  const content = locationContent[city]
  const serviceFaqs = serviceFAQs[type] || []
  const locationFaqs = getLocationFaqs(city, location.name)
  const faqs = mergeFaqs(serviceFaqs, locationFaqs)
  const otherLocations = locations.filter((l) => l.slug !== city).slice(0, 4)

  const localBusinessSchema = generateLocalBusinessSchema(location.name, service.title)
  const serviceSchema = generateServiceSchema(
    `${service.title} in ${location.name}`,
    service.description,
    location.name
  )
  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : null

  return (
    <ServiceLocationContent
      serviceSlug={type}
      serviceTitle={service.title}
      serviceDescription={service.description}
      city={city}
      location={location}
      content={content}
      faqs={faqs}
      otherLocations={otherLocations}
      localBusinessSchema={localBusinessSchema}
      serviceSchema={serviceSchema}
      faqSchema={faqSchema}
    />
  )
}
