import type { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  path?: string
  noindex?: boolean
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://humboldtcountyappraiser.com'
const primarySiteUrl = process.env.PRIMARY_SITE_URL || 'https://tidwellassociates.com'

export const generateMetadata = ({ title, description, keywords, path, noindex }: SEOProps): Metadata => {
  const fullTitle = path === '/' ? title : `${title} | Humboldt County Appraiser`
  const url = path ? `${baseUrl}${path}` : baseUrl

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    authors: [{ name: 'Tidwell & Associates' }],
    creator: 'Tidwell & Associates',
    publisher: 'Tidwell & Associates',
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title: fullTitle,
      description,
      siteName: 'Humboldt County Appraiser',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  }
}

export const generateLocalBusinessSchema = (city?: string, serviceName?: string) => {
  const address = {
    '@type': 'PostalAddress',
    addressLocality: city || 'Humboldt County',
    addressRegion: 'CA',
    addressCountry: 'US',
  }

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Humboldt County Appraiser',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: serviceName
      ? `${serviceName} services in ${city || 'Humboldt County'}, California. Professional real estate appraisal services.`
      : 'Professional real estate appraisal services throughout Humboldt County, California',
    address,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7941,
      longitude: -124.1476,
    },
    areaServed: {
      '@type': 'City',
      name: city || 'Humboldt County',
      containedIn: {
        '@type': 'State',
        name: 'California',
      },
    },
    serviceType: [
      'Real Estate Appraisal',
      'Residential Appraisal',
      'Commercial Appraisal',
      'Agricultural Appraisal',
      'Property Valuation',
    ],
    sameAs: [primarySiteUrl],
  }

  return schema
}

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export const generateServiceSchema = (name: string, description: string, city?: string) => {
  const service: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Humboldt County Appraiser',
      url: baseUrl,
    },
  }
  if (city) {
    service.areaServed = {
      '@type': 'City',
      name: city,
      addressRegion: 'CA',
      addressCountry: 'US',
    }
  }
  return service
}

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

