import { NextRequest, NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { validateTurnstileToken } from 'next-turnstile'
import { contactFormSchema } from '@/lib/validation'
import { sendContactEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { turnstileToken, ...formData } = body

    if (!turnstileToken || typeof turnstileToken !== 'string') {
      return NextResponse.json(
        { error: 'Verification required. Please complete the captcha.' },
        { status: 400 }
      )
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY
    if (!secretKey) {
      console.error('TURNSTILE_SECRET_KEY is not configured')
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      )
    }

    const validation = await validateTurnstileToken({
      token: turnstileToken,
      secretKey,
      remoteip: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || undefined,
    })

    if (!validation.success) {
      console.error('Turnstile validation failed:', validation.error_codes)
      return NextResponse.json(
        { error: 'Verification failed. Please try again.' },
        { status: 400 }
      )
    }

    const validatedData = contactFormSchema.parse(formData)
    await sendContactEmail(validatedData)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data. Please check your inputs.' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    )
  }
}

