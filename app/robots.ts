import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://humboldtcountyappraiser.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thank-you', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

