'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Turnstile } from 'next-turnstile'
import { contactFormSchema, type ContactFormInput } from '@/lib/validation'
import Button from './ui/Button'

interface ContactFormProps {
  initialAppraisalType?: string
  initialServiceCategory?: string
  compact?: boolean
}

const ContactForm = ({ initialAppraisalType, initialServiceCategory, compact = false }: ContactFormProps) => {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      appraisalType: (initialAppraisalType as any) || undefined,
      serviceCategory: (initialServiceCategory as any) || undefined,
    },
  })

  const onSubmit = async (data: ContactFormInput) => {
    if (!turnstileToken) {
      setSubmitError('Please complete the verification.')
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, turnstileToken }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit form')
      }

      router.push('/thank-you')
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${compact ? '' : 'max-w-2xl'}`}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-fog-200 mb-2">
            Name <span className="text-amber-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="input"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-amber-400" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-fog-200 mb-2">
            Email <span className="text-amber-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="input"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-amber-400" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-fog-200 mb-2">
          Phone <span className="text-amber-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="input"
          placeholder="(707) 555-1234"
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-amber-400" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="propertyAddress" className="block text-sm font-medium text-fog-200 mb-2">
          Property Address <span className="text-amber-500">*</span>
        </label>
        <input
          id="propertyAddress"
          type="text"
          {...register('propertyAddress')}
          className="input"
          placeholder="123 Main St, Eureka, CA 95501"
          aria-invalid={errors.propertyAddress ? 'true' : 'false'}
          aria-describedby={errors.propertyAddress ? 'property-address-error' : undefined}
        />
        {errors.propertyAddress && (
          <p id="property-address-error" className="mt-1 text-sm text-amber-400" role="alert">
            {errors.propertyAddress.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="appraisalType" className="block text-sm font-medium text-fog-200 mb-2">
            Appraisal Type <span className="text-amber-500">*</span>
          </label>
          <select
            id="appraisalType"
            {...register('appraisalType')}
            className="select"
            aria-invalid={errors.appraisalType ? 'true' : 'false'}
            aria-describedby={errors.appraisalType ? 'appraisal-type-error' : undefined}
          >
            <option value="">Select type...</option>
            <option value="residential">Residential</option>
            <option value="multifamily">Multifamily</option>
            <option value="industrial">Industrial</option>
            <option value="commercial">Commercial</option>
            <option value="agricultural">Agricultural</option>
            <option value="vacant-land">Vacant Land</option>
          </select>
          {errors.appraisalType && (
            <p id="appraisal-type-error" className="mt-1 text-sm text-amber-400" role="alert">
              {errors.appraisalType.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="serviceCategory" className="block text-sm font-medium text-fog-200 mb-2">
            Service Needed <span className="text-amber-500">*</span>
          </label>
          <select
            id="serviceCategory"
            {...register('serviceCategory')}
            className="select"
            aria-invalid={errors.serviceCategory ? 'true' : 'false'}
            aria-describedby={errors.serviceCategory ? 'service-category-error' : undefined}
          >
            <option value="">Select service...</option>
            <option value="lending">Lending</option>
            <option value="litigation">Litigation/Expert Witness</option>
            <option value="eminent-domain">Eminent Domain</option>
            <option value="conservation-easements">Conservation Easements</option>
            <option value="tax-estate-planning">Tax/Estate Planning</option>
            <option value="dissolution">Dissolution</option>
            <option value="before-and-after">Before-and-After</option>
            <option value="personal-planning">Personal Planning/Marketing</option>
          </select>
          {errors.serviceCategory && (
            <p id="service-category-error" className="mt-1 text-sm text-amber-400" role="alert">
              {errors.serviceCategory.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-fog-200 mb-2">
          Additional Details (Optional)
        </label>
        <textarea
          id="message"
          {...register('message')}
          className="textarea"
          placeholder="Please provide any additional information about your appraisal needs..."
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-amber-400" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex justify-start">
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
          onVerify={setTurnstileToken}
          onExpire={() => setTurnstileToken(null)}
          theme="dark"
          size="normal"
        />
      </div>

      {submitError && (
        <div className="rounded-lg bg-red-900/20 border border-red-500/30 backdrop-blur-sm p-4">
          <p className="text-sm text-red-400" role="alert">
            {submitError}
          </p>
        </div>
      )}

      <Button type="submit" variant="primary" disabled={isSubmitting || !turnstileToken} className="w-full sm:w-auto">
        {isSubmitting ? 'Submitting...' : 'Request Appraisal Quote'}
      </Button>
    </form>
  )
}

export default ContactForm

