import nodemailer from 'nodemailer'
import type { ContactFormInput } from './validation'

const formatAppraisalType = (type: string): string => {
  const types: Record<string, string> = {
    residential: 'Residential',
    multifamily: 'Multifamily',
    industrial: 'Industrial',
    commercial: 'Commercial',
    agricultural: 'Agricultural',
    'vacant-land': 'Vacant Land',
  }
  return types[type] || type
}

const formatServiceCategory = (category: string): string => {
  const categories: Record<string, string> = {
    lending: 'Lending',
    litigation: 'Litigation/Expert Witness',
    'eminent-domain': 'Eminent Domain',
    'conservation-easements': 'Conservation Easements',
    'tax-estate-planning': 'Tax/Estate Planning',
    dissolution: 'Dissolution',
    'before-and-after': 'Before-and-After',
    'personal-planning': 'Personal Planning/Marketing',
  }
  return categories[category] || category
}

const formatEmailBody = (data: ContactFormInput): string => {
  return `
New Contact Form Submission from Humboldt County Appraiser Site

Contact Information:
--------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Property Details:
-----------------
Property Address: ${data.propertyAddress}
Appraisal Type: ${formatAppraisalType(data.appraisalType)}
Service Needed: ${formatServiceCategory(data.serviceCategory)}

${data.message ? `Message:\n${data.message}` : ''}

---
This form was submitted from humboldtcountyappraiser.com
  `.trim()
}

export const sendContactEmail = async (data: ContactFormInput): Promise<void> => {
  const emailProvider = process.env.EMAIL_PROVIDER || 'none'
  const recipientEmail = process.env.CONTACT_EMAIL || 'appraisal@tidwellassociates.com'

  if (emailProvider === 'none') {
    // In development, just log the email
    console.log('Email would be sent to:', recipientEmail)
    console.log('Email body:', formatEmailBody(data))
    return
  }

  if (emailProvider === 'resend') {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not configured')
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Humboldt County Appraiser <noreply@humboldtcountyappraiser.com>',
        to: [recipientEmail],
        subject: `New Appraisal Inquiry from ${data.name}`,
        text: formatEmailBody(data),
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(`Failed to send email: ${error.message || 'Unknown error'}`)
    }
  } else if (emailProvider === 'smtp') {
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (!smtpHost || !smtpUser || !smtpPass) {
      throw new Error(
        'SMTP is not fully configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in environment variables.'
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort || '587', 10),
      secure: parseInt(smtpPort || '587', 10) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const fromAddress = process.env.SMTP_FROM || smtpUser

    await transporter.sendMail({
      from: `Humboldt County Appraiser <${fromAddress}>`,
      to: recipientEmail,
      subject: `New Appraisal Inquiry from ${data.name}`,
      text: formatEmailBody(data),
    })
  } else {
    throw new Error(`Unknown email provider: ${emailProvider}`)
  }
}

