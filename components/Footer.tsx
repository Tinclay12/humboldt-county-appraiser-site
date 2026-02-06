import Link from 'next/link'
import { locations } from '@/lib/locations'
import { appraisalTypes } from '@/lib/services'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const primarySiteUrl = process.env.PRIMARY_SITE_URL || 'https://tidwellassociates.com'

  return (
    <footer className="border-t border-fog-600/30 bg-dark-background-secondary/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Humboldt County Appraiser</h3>
            <p className="text-fog-300 mb-4">
              Professional real estate appraisal services throughout Humboldt County, California.
              Expert valuations for residential, commercial, agricultural, and specialty
              properties.
            </p>
            <div className="text-sm text-fog-400 mb-2" itemScope itemType="https://schema.org/LocalBusiness">
              <span itemProp="name">Humboldt County Appraiser</span>
              <br />
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressRegion">Humboldt County</span>,{' '}
                <span itemProp="addressRegion">CA</span>
              </span>
            </div>
            <p className="text-sm text-fog-400">
              A service of{' '}
              <a
                href={primarySiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 underline transition-colors"
              >
                Tidwell & Associates
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {appraisalTypes.map((type) => (
                <li key={type.slug}>
                  <Link
                    href={`/services/${type.slug}`}
                    className="text-fog-300 hover:text-amber-400 transition-colors"
                  >
                    {type.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-fog-300 hover:text-amber-400 transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Areas Served
            </h4>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-fog-300 hover:text-amber-400 transition-colors"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-fog-300 hover:text-amber-400 transition-colors"
                >
                  All Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-fog-600/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-fog-400">
              © {currentYear} Humboldt County Appraiser. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex gap-6">
              <Link
                href="/contact"
                className="text-sm text-fog-300 hover:text-amber-400 transition-colors"
              >
                Contact
              </Link>
              <a
                href={primarySiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-fog-300 hover:text-amber-400 transition-colors"
              >
                Tidwell & Associates
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
