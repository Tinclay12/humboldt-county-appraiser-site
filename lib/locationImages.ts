/**
 * Mapping of location slugs to primary image filenames in public/locations/.
 * Used for tiles and hero images. Fallback to /images/locations/{slug}/hero.jpg when no mapping.
 */
const LOCATION_PRIMARY_IMAGES: Record<string, string> = {
  eureka: 'eureka-city.png',
  arcata: 'arcata-city.png',
  fortuna: 'fortuna-city.png',
  mckinleyville: 'mckinleyville-city.png',
  trinidad: 'trinidad-beach.png',
  ferndale: 'ferndale-city.png',
  'blue-lake': 'blue-lake-city.png',
  'rio-dell': 'rio-dell-street.png',
  scotia: 'scotia-houses.png',
}

/**
 * Optional gallery images for city pages (1–2 extra scenes per location).
 * Paths are under /locations/.
 */
const LOCATION_GALLERY_IMAGES: Record<string, string[]> = {
  eureka: ['eureka-city-aerial.png'],
  arcata: ['arcata-redwoods-park.png'],
  fortuna: ['fortuna-sunset.png'],
  mckinleyville: ['mckinleyville-trail.png'],
  trinidad: ['trinidad-lighthouse.png'],
  ferndale: ['ferndale-pastoral.png'],
  'blue-lake': ['blue-lake-city2.png'],
  'rio-dell': ['rio-dell-sign.png'],
  scotia: ['scotia-mill.png'],
}

/**
 * Returns the image path for a location (tiles and hero).
 * Uses new /locations/ images when mapped, otherwise falls back to existing hero.jpg.
 */
export const getLocationImagePath = (slug: string): string => {
  const filename = LOCATION_PRIMARY_IMAGES[slug]
  if (filename) {
    return `/locations/${filename}`
  }
  return `/images/locations/${slug}/hero.jpg`
}

/**
 * Returns 0–2 additional image paths for use on city pages (e.g. "Scenic" section).
 */
export const getLocationGalleryImages = (slug: string): string[] => {
  const filenames = LOCATION_GALLERY_IMAGES[slug]
  if (!filenames?.length) {
    return []
  }
  return filenames.map((name) => `/locations/${name}`)
}
