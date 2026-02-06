import { MetadataRoute } from 'next'
import { locations } from '@/lib/locations'
import { appraisalTypes, serviceCategories } from '@/lib/services'
import { getAllServiceLocationCombos } from '@/lib/combos'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://humboldtcountyappraiser.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const serviceTypePages: MetadataRoute.Sitemap = appraisalTypes.map((type) => ({
    url: `${baseUrl}/services/${type.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const serviceCategoryPages: MetadataRoute.Sitemap = serviceCategories.map((category) => ({
    url: `${baseUrl}/services/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const serviceLocationPages: MetadataRoute.Sitemap = getAllServiceLocationCombos().map(
    (combo) => ({
      url: `${baseUrl}/services/${combo.typeSlug}/${combo.citySlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  )

  return [
    ...staticPages,
    ...locationPages,
    ...serviceTypePages,
    ...serviceCategoryPages,
    ...serviceLocationPages,
  ]
}

