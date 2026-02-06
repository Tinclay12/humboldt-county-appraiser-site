import type { Location } from '@/types'

export const locations: Location[] = [
  {
    name: 'Eureka',
    slug: 'eureka',
    description: 'Professional real estate appraisal services in Eureka, California. Expert property valuations for residential, commercial, and agricultural properties.',
    keywords: ['Eureka appraiser', 'Eureka real estate appraiser', 'property appraiser Eureka CA', 'Eureka home appraiser'],
  },
  {
    name: 'Arcata',
    slug: 'arcata',
    description: 'Trusted real estate appraisal services in Arcata, California. Serving homeowners, lenders, and businesses with accurate property valuations.',
    keywords: ['Arcata appraiser', 'Arcata real estate appraiser', 'property appraiser Arcata CA', 'Arcata home appraiser'],
  },
  {
    name: 'Fortuna',
    slug: 'fortuna',
    description: 'Expert appraisal services in Fortuna, California. Comprehensive property valuations for all property types throughout Fortuna.',
    keywords: ['Fortuna appraiser', 'Fortuna real estate appraiser', 'property appraiser Fortuna CA', 'Fortuna home appraiser'],
  },
  {
    name: 'McKinleyville',
    slug: 'mckinleyville',
    description: 'Professional appraisal services in McKinleyville, California. Reliable property valuations for residential and commercial properties.',
    keywords: ['McKinleyville appraiser', 'McKinleyville real estate appraiser', 'property appraiser McKinleyville CA'],
  },
  {
    name: 'Trinidad',
    slug: 'trinidad',
    description: 'Expert real estate appraisal services in Trinidad, California. Serving coastal properties with accurate and reliable valuations.',
    keywords: ['Trinidad appraiser', 'Trinidad real estate appraiser', 'property appraiser Trinidad CA'],
  },
  {
    name: 'Ferndale',
    slug: 'ferndale',
    description: 'Trusted appraisal services in Ferndale, California. Professional property valuations for historic and residential properties.',
    keywords: ['Ferndale appraiser', 'Ferndale real estate appraiser', 'property appraiser Ferndale CA'],
  },
  {
    name: 'Blue Lake',
    slug: 'blue-lake',
    description: 'Professional appraisal services in Blue Lake, California. Expert property valuations for all property types.',
    keywords: ['Blue Lake appraiser', 'Blue Lake real estate appraiser', 'property appraiser Blue Lake CA'],
  },
  {
    name: 'Rio Dell',
    slug: 'rio-dell',
    description: 'Expert real estate appraisal services in Rio Dell, California. Comprehensive property valuations for residential and commercial properties.',
    keywords: ['Rio Dell appraiser', 'Rio Dell real estate appraiser', 'property appraiser Rio Dell CA'],
  },
  {
    name: 'Scotia',
    slug: 'scotia',
    description: 'Professional appraisal services in Scotia, California. Trusted property valuations for all property types.',
    keywords: ['Scotia appraiser', 'Scotia real estate appraiser', 'property appraiser Scotia CA'],
  },
]

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find((loc) => loc.slug === slug)
}

export const getAllLocationSlugs = (): string[] => {
  return locations.map((loc) => loc.slug)
}

