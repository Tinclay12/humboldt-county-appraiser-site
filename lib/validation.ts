import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number'),
  propertyAddress: z.string().min(5, 'Please enter a property address').max(200),
  appraisalType: z.enum(['residential', 'multifamily', 'industrial', 'commercial', 'agricultural', 'vacant-land']),
  serviceCategory: z.enum([
    'lending',
    'litigation',
    'eminent-domain',
    'conservation-easements',
    'tax-estate-planning',
    'dissolution',
    'before-and-after',
    'personal-planning',
  ]),
  message: z.string().min(10, 'Please provide more details').max(1000).optional().or(z.literal('')),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>

