import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import ThankYouPageClient from './ThankYouPageClient'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Thank You | We Received Your Request',
  description: 'Thank you for contacting Humboldt County Appraiser. We have received your request and will get back to you soon.',
  path: '/thank-you',
  noindex: true,
})

export default function ThankYouPage() {
  return <ThankYouPageClient />
}
