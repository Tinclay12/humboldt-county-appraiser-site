import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: '400',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '600'],
})

export const metadata: Metadata = generateSEOMetadata({
  title: 'Humboldt County Appraiser | Professional Real Estate Appraisal Services',
  description: 'Expert real estate appraisal services throughout Humboldt County, California. Residential, commercial, agricultural, and specialty property valuations.',
  keywords: [
    'Humboldt County appraiser',
    'real estate appraiser Humboldt County',
    'property appraiser Eureka',
    'commercial appraiser Arcata',
    'residential appraiser Fortuna',
    'agricultural appraiser',
  ],
  path: '/',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Humboldt County Appraiser',
              url: 'https://humboldtcountyappraiser.com',
              description: 'Professional real estate appraisal services throughout Humboldt County, California',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Humboldt County',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              areaServed: {
                '@type': 'City',
                name: 'Humboldt County',
              },
              serviceType: [
                'Real Estate Appraisal',
                'Residential Appraisal',
                'Commercial Appraisal',
                'Agricultural Appraisal',
              ],
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

