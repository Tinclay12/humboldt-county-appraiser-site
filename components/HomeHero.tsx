import Image from 'next/image'
import Link from 'next/link'

const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/forest-home-hero.png"
          alt="Humboldt County redwoods and forest landscape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-[1]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal mb-6 animate-fade-in-up">
            <span className="gradient-text">Humboldt County</span>
            <br />
            <span className="text-white">Real Estate Appraiser</span>
          </h1>
          <p
            className="mb-12 text-xl md:text-2xl text-white leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            Expert property valuations for residential, commercial, agricultural, and specialty
            properties throughout Humboldt County, California. The professionals at Tidwell &
            Associates are trusted by lenders, attorneys, and property owners.
          </p>
          <div
            className="flex flex-col gap-6 sm:flex-row animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <Link href="/contact" className="btn btn-primary text-lg px-10 py-5">
              Get Free Quote
            </Link>
            <Link href="/services" className="btn btn-outline text-lg px-10 py-5">
              View Services
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-400 animate-bounce-slow"
        aria-hidden="true"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

export default HomeHero
