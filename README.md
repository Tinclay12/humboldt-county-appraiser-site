# Humboldt County Appraiser Site

A high-end, SEO-optimized lead capture website for real estate appraisal services in Humboldt County, California.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Forms**: React Hook Form + Zod
- **Email**: Configurable (SMTP or Resend API)
- **CAPTCHA**: Cloudflare Turnstile

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy the environment variables template:
```bash
cp .env.example .env.local
```

3. Configure your environment variables in `.env.local`:
   - Add Cloudflare Turnstile keys (use test keys for local dev; see `.env.example`)
   - Set `EMAIL_PROVIDER=smtp` and configure SMTP (Gmail or Brevo)
   - Set `CONTACT_EMAIL` to your business inbox

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Email Configuration

The site supports multiple email providers:

- **SMTP** (Recommended for free): Set `EMAIL_PROVIDER=smtp` and configure `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`. Works with Gmail (App Password) or Brevo.
- **Resend**: Set `EMAIL_PROVIDER=resend` and `RESEND_API_KEY=your_key`
- **Development**: Set `EMAIL_PROVIDER=none` to log emails to console

## Building for Production

```bash
npm run build
npm start
```

## SEO Features

- Dynamic sitemap generation
- Robots.txt configuration
- Structured data (JSON-LD) for LocalBusiness
- Optimized metadata per page
- Location-specific landing pages
- Service-specific pages

## Project Structure

- `/app` - Next.js app router pages and routes
- `/components` - React components (Header, Footer, ContactForm, etc.)
- `/lib` - Utilities (validation, email, SEO, data)
- `/types` - TypeScript type definitions
- `/public` - Static assets

## Sister Site Integration

This site is designed as a sister site to tidwellassociates.com. The footer includes links and references to the primary site.

