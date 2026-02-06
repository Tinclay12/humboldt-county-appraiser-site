import Link from 'next/link'
import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import ServicesPageClient from './ServicesPageClient'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Appraisal Services | Humboldt County Appraiser',
  description: 'Comprehensive real estate appraisal services including residential, commercial, agricultural, multifamily, industrial, and vacant land appraisals throughout Humboldt County.',
  keywords: [
    'appraisal services',
    'residential appraisal',
    'commercial appraisal',
    'agricultural appraisal',
    'property appraisal services',
  ],
  path: '/services',
})

export default function ServicesPage() {
  return <ServicesPageClient />
}
