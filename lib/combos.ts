import { appraisalTypes } from '@/lib/services'
import { locations } from '@/lib/locations'

export interface ServiceLocationCombo {
  typeSlug: string
  citySlug: string
}

export const getAllServiceLocationCombos = (): ServiceLocationCombo[] => {
  const combos: ServiceLocationCombo[] = []
  for (const type of appraisalTypes) {
    for (const location of locations) {
      combos.push({ typeSlug: type.slug, citySlug: location.slug })
    }
  }
  return combos
}

export const isValidServiceLocationCombo = (
  typeSlug: string,
  citySlug: string
): boolean => {
  const validType = appraisalTypes.some((t) => t.slug === typeSlug)
  const validCity = locations.some((l) => l.slug === citySlug)
  return validType && validCity
}
