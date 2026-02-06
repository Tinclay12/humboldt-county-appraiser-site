export const COST_FAQ_ANSWER =
  'Appraisal costs vary based on property type, size, complexity, and purpose. Tidwell & Associates provides custom quotes for each project—contact us for a quote tailored to your specific property.'

export const getCostFaqAnswerForCity = (city: string): string =>
  `Appraisal costs vary based on property type, size, complexity, and purpose. Tidwell & Associates provides custom quotes for each project—contact us for a quote tailored to your specific property in ${city}.`

export const serviceFAQs: Record<string, Array<{ question: string; answer: string }>> = {
  residential: [
    {
      question: 'How much does a residential appraisal cost in Humboldt County?',
      answer: COST_FAQ_ANSWER,
    },
    {
      question: 'How long does a residential appraisal take?',
      answer: 'Most residential appraisals are completed within 5-10 business days from the inspection. Rush turnaround may be available for an additional fee.',
    },
    {
      question: 'What is included in a residential appraisal report?',
      answer: 'Our reports include a physical inspection, comparable sales analysis, and a detailed valuation. Reports meet lending, legal, and personal planning standards.',
    },
  ],
  commercial: [
    {
      question: 'How much does a commercial appraisal cost?',
      answer: COST_FAQ_ANSWER,
    },
    {
      question: 'What types of commercial properties do you appraise?',
      answer: 'We appraise office buildings, retail spaces, industrial properties, mixed-use, and other commercial real estate throughout Humboldt County.',
    },
  ],
  agricultural: [
    {
      question: 'How do you value agricultural land in Humboldt County?',
      answer: 'We analyze comparable sales of similar agricultural properties, consider soil quality, water rights, improvements, and highest-and-best use.',
    },
    {
      question: 'Do you appraise timberland?',
      answer: 'Yes. We provide appraisals for timberland, ranches, and agricultural properties throughout Humboldt County.',
    },
  ],
  multifamily: [
    {
      question: 'How much does a multifamily appraisal cost?',
      answer: COST_FAQ_ANSWER,
    },
  ],
  industrial: [
    {
      question: 'What industrial properties do you appraise?',
      answer: 'We appraise warehouses, manufacturing facilities, industrial complexes, and related property types throughout Humboldt County.',
    },
  ],
  'vacant-land': [
    {
      question: 'How do you value vacant land?',
      answer: 'We analyze comparable land sales, zoning, utilities, access, and highest-and-best use to determine vacant land value.',
    },
  ],
}
