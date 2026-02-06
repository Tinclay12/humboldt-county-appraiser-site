import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-24 bg-dark-background-primary min-h-screen flex items-center">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          404 - Page Not Found
        </h1>
        <p className="mb-12 text-xl text-fog-300">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/" className="btn btn-primary">
            Return to Home
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
