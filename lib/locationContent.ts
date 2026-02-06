import type { Location } from '@/types'
import { getCostFaqAnswerForCity } from '@/lib/faq'
import {
  getBaseLocationFaqs,
  type LocationFaq,
  type BaseFaqOptions,
} from '@/lib/locationFaqTemplates'

export interface LocationContent extends Location {
  about?: string[]
  nearbySlugs?: string[]
  faqs?: Array<{ question: string; answer: string }>
  faqOverrides?: Partial<Record<'cost' | 'timeline' | 'scope' | 'areas', LocationFaq>>
  additionalFaqs?: LocationFaq[]
  areasDetail?: string
}

const FAQ_SLOTS = ['cost', 'timeline', 'scope', 'areas'] as const

export const getLocationFaqs = (citySlug: string, cityName: string): LocationFaq[] => {
  const content = locationContent[citySlug]
  const baseOptions: BaseFaqOptions | undefined = content?.areasDetail
    ? { areasDetail: content.areasDetail }
    : undefined
  const baseFaqs = getBaseLocationFaqs(cityName, baseOptions)

  if (content?.faqs && content.faqs.length >= 4) {
    return content.faqs
  }

  const overrides = content?.faqOverrides ?? {}
  const merged = baseFaqs.map((faq, i) => {
    const slot = FAQ_SLOTS[i]
    return overrides[slot] ?? faq
  })
  const additional = content?.additionalFaqs ?? []

  return [...merged, ...additional]
}

export const locationContent: Record<string, Omit<LocationContent, 'name' | 'slug' | 'description' | 'keywords'>> = {
  eureka: {
    about: [
      'Eureka is the largest city and county seat of Humboldt County, known for its Victorian architecture and thriving arts community. The local real estate market includes historic homes, waterfront properties, and diverse residential and commercial offerings.',
      'Tidwell & Associates has deep experience valuing properties throughout Eureka, from downtown commercial buildings to residential neighborhoods like Henderson Center, Cutten, and Myrtletown. We understand the factors that drive property values in this unique coastal community.',
    ],
    nearbySlugs: ['arcata', 'mckinleyville', 'fortuna', 'rio-dell'],
    faqs: [
      {
        question: 'How much does an appraisal cost in Eureka, CA?',
        answer: getCostFaqAnswerForCity('Eureka'),
      },
      {
        question: 'How long does a residential appraisal take in Eureka?',
        answer: 'Most residential appraisals in Eureka are completed within 5-7 business days from the inspection. Rush service may be available for an additional fee.',
      },
      {
        question: 'Do you appraise commercial properties in Eureka?',
        answer: 'Yes. Tidwell & Associates provides commercial, residential, agricultural, and specialty property appraisals throughout Eureka and Humboldt County.',
      },
      {
        question: 'What areas of Eureka do you serve?',
        answer: 'We serve all of Eureka including Henderson Center, Cutten, Myrtletown, Old Town, and surrounding neighborhoods.',
      },
    ],
  },
  arcata: {
    about: [
      'Arcata is a vibrant college town home to Humboldt State University, with a mix of student housing, family homes, and commercial properties. The Arcata real estate market is influenced by the university, local agriculture, and the scenic North Coast environment.',
      'Our appraisers are familiar with Arcata neighborhoods including Downtown, Northtown, Sunny Brae, and the Arcata Bottom. We provide accurate valuations for lenders, buyers, sellers, and legal purposes.',
    ],
    nearbySlugs: ['eureka', 'mckinleyville', 'trinidad', 'blue-lake'],
    areasDetail: 'including Downtown, Northtown, Sunny Brae, and the Arcata Bottom',
    faqOverrides: {
      cost: {
        question: 'How much does a home appraisal cost in Arcata?',
        answer: getCostFaqAnswerForCity('Arcata'),
      },
    },
    additionalFaqs: [
      {
        question: 'Do you appraise multi-unit properties in Arcata?',
        answer: 'Yes. Tidwell & Associates provides multifamily, residential, commercial, and agricultural appraisals throughout Arcata and Humboldt County.',
      },
    ],
  },
  fortuna: {
    about: [
      'Fortuna is known as the "Friendly City" and serves as a gateway to the Eel River Valley. The area features a mix of residential properties, agricultural land, and small commercial establishments.',
      'Our team has extensive experience with Fortuna properties, including single-family homes, ranches, and commercial buildings. We understand the unique characteristics of the Eel River Valley market.',
    ],
    nearbySlugs: ['eureka', 'rio-dell', 'ferndale', 'scotia'],
  },
  mckinleyville: {
    about: [
      'McKinleyville is one of the largest unincorporated communities in Humboldt County, featuring a mix of suburban homes, forested lots, and ocean views. The area has grown significantly while maintaining its rural character.',
      'Tidwell & Associates values properties throughout McKinleyville, from newer subdivisions to established neighborhoods. We provide reliable appraisals for lending, sales, and estate planning.',
    ],
    nearbySlugs: ['arcata', 'eureka', 'trinidad'],
    additionalFaqs: [
      {
        question: 'Do you provide appraisals in McKinleyville?',
        answer: 'Yes. We serve McKinleyville and all of Humboldt County for residential, commercial, agricultural, and vacant land appraisals.',
      },
    ],
  },
  trinidad: {
    about: [
      'Trinidad is a scenic coastal community known for its harbor, beaches, and forested hills. Property types range from ocean-view homes to secluded lots in the redwoods.',
      'Our appraisers understand the premium that coastal and view properties command in Trinidad. We provide accurate valuations for lending, estate planning, and sales.',
    ],
    nearbySlugs: ['mckinleyville', 'arcata'],
    additionalFaqs: [
      {
        question: 'How do you value coastal properties in Trinidad?',
        answer: 'We analyze comparable sales of coastal and view properties in Trinidad and adjacent areas, accounting for ocean proximity, views, and access. Each appraisal is tailored to the specific property.',
      },
    ],
  },
  ferndale: {
    about: [
      'Ferndale is a Victorian village known for its well-preserved historic buildings and dairy farming heritage. The real estate market includes historic homes, agricultural properties, and residential lots.',
      'Tidwell & Associates has experience valuing historic and agricultural properties in Ferndale. We understand the unique considerations for period homes and working farmland.',
    ],
    nearbySlugs: ['fortuna', 'eureka'],
    additionalFaqs: [
      {
        question: 'Do you appraise historic homes in Ferndale?',
        answer: 'Yes. We provide appraisals for historic Victorian homes and other property types throughout Ferndale and Humboldt County.',
      },
    ],
  },
  'blue-lake': {
    about: [
      'Blue Lake is a small city along the Mad River, known for its community spirit and outdoor recreation. The area includes residential properties, small commercial parcels, and forested land.',
      'Our appraisers serve Blue Lake and the greater Arcata area. We provide valuations for all property types with local market expertise.',
    ],
    nearbySlugs: ['arcata', 'eureka'],
    additionalFaqs: [
      {
        question: 'Do you serve Blue Lake for appraisals?',
        answer: 'Yes. Tidwell & Associates provides appraisal services throughout Blue Lake and all of Humboldt County.',
      },
    ],
  },
  'rio-dell': {
    about: [
      'Rio Dell is a small city in the Eel River Valley, with a mix of residential and light commercial properties. The area is known for its affordability and community-focused atmosphere.',
      'We provide appraisal services for Rio Dell properties including single-family homes, multifamily, and commercial. Our team understands the Eel River Valley market dynamics.',
    ],
    nearbySlugs: ['fortuna', 'eureka', 'scotia'],
  },
  scotia: {
    about: [
      'Scotia is a historic company town with a unique character. The community features a mix of residential homes and proximity to forest and river recreation.',
      'Tidwell & Associates provides appraisal services for Scotia and the surrounding Eel River Valley. We understand the local market and property characteristics.',
    ],
    nearbySlugs: ['rio-dell', 'fortuna', 'eureka'],
    additionalFaqs: [
      {
        question: 'Do you appraise properties in Scotia?',
        answer: 'Yes. We serve Scotia and all of Humboldt County for residential, commercial, and agricultural appraisals.',
      },
    ],
  },
}
