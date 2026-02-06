export type AppraisalType =
  | 'residential'
  | 'multifamily'
  | 'industrial'
  | 'commercial'
  | 'agricultural'
  | 'vacant-land'

export type ServiceCategory =
  | 'lending'
  | 'litigation'
  | 'eminent-domain'
  | 'conservation-easements'
  | 'tax-estate-planning'
  | 'dissolution'
  | 'before-and-after'
  | 'personal-planning'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  propertyAddress: string
  appraisalType: AppraisalType
  serviceCategory: ServiceCategory
  message: string
}

export interface Location {
  name: string
  slug: string
  description: string
  keywords: string[]
}

export interface ServicePage {
  title: string
  description: string
  keywords: string[]
  slug: string
}

