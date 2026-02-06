import Link from 'next/link'
import type { Metadata } from 'next'
import ImageCard from '@/components/ui/ImageCard'
import { IMAGE_BLUR_PLACEHOLDER } from '@/lib/constants'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { locations } from '@/lib/locations'
import { getLocationImagePath } from '@/lib/locationImages'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Areas We Serve | Humboldt County Appraiser',
  description: 'Professional real estate appraisal services throughout Humboldt County, California. Serving Eureka, Arcata, Fortuna, McKinleyville, and all surrounding areas.',
  keywords: [
    'humboldt county appraiser',
    'eureka appraiser',
    'arcata appraiser',
    'fortuna appraiser',
    'mckinleyville appraiser',
    'appraiser near me',
  ],
  path: '/locations',
})

export default function LocationsPage() {
  return (
    <div className="py-24 bg-dark-background-primary min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Areas We Serve
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-fog-300">
            Tidwell & Associates provides expert real estate appraisal services throughout Humboldt County, California. 
            From coastal communities to inland cities, we&apos;re here to serve your property valuation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {locations.map((location, index) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="hover:shadow-premium-lg transition-all"
            >
              <ImageCard
                src={getLocationImagePath(location.slug)}
                alt={`${location.name}, California real estate appraisal services`}
                title={location.name}
                description={location.description}
                className="h-full"
                priority={index < 3}
                blurDataURL={IMAGE_BLUR_PLACEHOLDER}
              />
            </Link>
          ))}
        </div>

        <div className="card-glass rounded-xl p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Don&apos;t See Your City Listed?
          </h2>
          <p className="mb-6 text-fog-300 text-lg">
            We serve all areas within Humboldt County, California. If you don&apos;t see your specific 
            city or community listed, we still provide appraisal services in your area. 
            Contact us to discuss your property appraisal needs.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

