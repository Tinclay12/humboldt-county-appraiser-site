export const appraisalTypes = [
  {
    slug: 'residential',
    title: 'Residential Appraisal',
    description: 'Professional residential property appraisals for single-family homes, condominiums, and townhouses throughout Humboldt County.',
    keywords: ['residential appraiser', 'home appraiser', 'house appraiser', 'residential property valuation'],
  },
  {
    slug: 'multifamily',
    title: 'Multifamily Appraisal',
    description: 'Expert multifamily property appraisals for duplexes, apartment buildings, and multi-unit investment properties.',
    keywords: ['multifamily appraiser', 'apartment appraiser', 'multifamily property valuation', 'investment property appraisal'],
  },
  {
    slug: 'industrial',
    title: 'Industrial Appraisal',
    description: 'Comprehensive industrial property appraisals for warehouses, manufacturing facilities, and industrial complexes.',
    keywords: ['industrial appraiser', 'warehouse appraiser', 'industrial property valuation', 'commercial industrial appraisal'],
  },
  {
    slug: 'commercial',
    title: 'Commercial Appraisal',
    description: 'Professional commercial real estate appraisals for office buildings, retail spaces, and commercial properties.',
    keywords: ['commercial appraiser', 'commercial real estate appraiser', 'commercial property valuation', 'business property appraisal'],
  },
  {
    slug: 'agricultural',
    title: 'Agricultural Appraisal',
    description: 'Specialized agricultural property appraisals for farms, ranches, and agricultural land throughout Humboldt County.',
    keywords: ['agricultural appraiser', 'farm appraiser', 'ranch appraiser', 'agricultural land valuation'],
  },
  {
    slug: 'vacant-land',
    title: 'Vacant Land Appraisal',
    description: 'Expert vacant land appraisals for undeveloped lots, raw land, and land development projects.',
    keywords: ['vacant land appraiser', 'land appraiser', 'lot appraiser', 'vacant land valuation'],
  },
]

export const serviceCategories = [
  {
    slug: 'lending',
    title: 'Lending Appraisals',
    description: 'FHA, VA, USDA, and conventional lending appraisals. Fast turnaround times to meet your closing deadlines.',
    keywords: ['lending appraiser', 'mortgage appraiser', 'FHA appraiser', 'VA appraiser', 'loan appraisal'],
  },
  {
    slug: 'litigation',
    title: 'Litigation & Expert Witness',
    description: 'Expert witness testimony and litigation support services. Court-qualified appraisers for real estate disputes.',
    keywords: ['expert witness appraiser', 'litigation appraiser', 'court appraiser', 'real estate expert witness'],
  },
  {
    slug: 'eminent-domain',
    title: 'Eminent Domain Appraisals',
    description: 'Specialized appraisals for eminent domain cases. Before-and-after valuations for property takings.',
    keywords: ['eminent domain appraiser', 'condemnation appraiser', 'government taking appraisal'],
  },
  {
    slug: 'conservation-easements',
    title: 'Conservation Easement Appraisals',
    description: 'Expert appraisals for conservation easements and environmental land use restrictions.',
    keywords: ['conservation easement appraiser', 'environmental appraisal', 'easement valuation'],
  },
  {
    slug: 'tax-estate-planning',
    title: 'Tax & Estate Planning',
    description: 'Property appraisals for tax planning, estate planning, and IRS compliance requirements.',
    keywords: ['estate planning appraiser', 'tax appraisal', 'IRS appraiser', 'estate valuation'],
  },
  {
    slug: 'dissolution',
    title: 'Dissolution Appraisals',
    description: 'Unbiased property appraisals for divorce proceedings and property division cases.',
    keywords: ['divorce appraiser', 'dissolution appraiser', 'property division appraisal'],
  },
  {
    slug: 'before-and-after',
    title: 'Before-and-After Appraisals',
    description: 'Comparative property valuations before and after improvements, renovations, or property changes.',
    keywords: ['before after appraisal', 'renovation appraisal', 'improvement valuation'],
  },
  {
    slug: 'personal-planning',
    title: 'Personal Planning & Marketing',
    description: 'Property appraisals for personal financial planning, marketing, and investment decision-making.',
    keywords: ['personal planning appraiser', 'marketing appraisal', 'investment appraisal', 'financial planning appraisal'],
  },
]

export const getAppraisalTypeBySlug = (slug: string) => {
  return appraisalTypes.find((type) => type.slug === slug)
}

export const getServiceCategoryBySlug = (slug: string) => {
  return serviceCategories.find((cat) => cat.slug === slug)
}

