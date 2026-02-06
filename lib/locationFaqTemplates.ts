import { getCostFaqAnswerForCity } from '@/lib/faq'

export interface LocationFaq {
  question: string
  answer: string
}

export interface BaseFaqOptions {
  areasDetail?: string
}

export const getBaseLocationFaqs = (
  cityName: string,
  options?: BaseFaqOptions
): LocationFaq[] => {
  const areasAnswer = options?.areasDetail
    ? `We serve all of ${cityName} ${options.areasDetail}.`
    : `We serve all of ${cityName} and surrounding neighborhoods throughout Humboldt County.`

  return [
    {
      question: `How much does an appraisal cost in ${cityName}?`,
      answer: getCostFaqAnswerForCity(cityName),
    },
    {
      question: `How long does an appraisal take in ${cityName}?`,
      answer: `Most appraisals in ${cityName} are completed within 5-10 business days from the inspection. Rush turnaround may be available—contact us to discuss your timeline.`,
    },
    {
      question: `What property types do you appraise in ${cityName}?`,
      answer: `Tidwell & Associates provides residential, commercial, agricultural, multifamily, industrial, and vacant land appraisals throughout ${cityName} and Humboldt County.`,
    },
    {
      question: `What areas of ${cityName} do you serve?`,
      answer: areasAnswer,
    },
  ]
}
