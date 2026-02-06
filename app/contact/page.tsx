import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us | Request an Appraisal Quote',
  description: 'Contact Humboldt County Appraiser for a free quote on your property appraisal needs. Expert appraisals for residential, commercial, and agricultural properties.',
  keywords: ['contact appraiser', 'appraisal quote', 'humboldt county appraiser contact'],
  path: '/contact',
})

export default function ContactPage() {
  return <ContactPageClient />
}
