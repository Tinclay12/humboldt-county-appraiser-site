import Image from 'next/image'

interface ImageCardProps {
  src: string
  alt: string
  title?: string
  description?: string
  className?: string
  priority?: boolean
  overlay?: boolean
  hoverEffect?: boolean
  /** Optional blur placeholder data URL for faster perceived load */
  blurDataURL?: string
}

const ImageCard = ({
  src,
  alt,
  title,
  description,
  className = '',
  priority = false,
  overlay = true,
  hoverEffect = true,
  blurDataURL,
}: ImageCardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl ${className}`}
    >
      <div className="relative h-full min-h-[300px]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          placeholder={blurDataURL ? 'blur' : undefined}
          blurDataURL={blurDataURL}
          className={`object-cover transition-transform duration-500 transition-brightness duration-500 ${
            hoverEffect ? 'group-hover:scale-105 group-hover:brightness-110' : ''
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-dark-background-primary/90 via-dark-background-primary/50 to-transparent" />
        )}
        {(title || description) && (
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            {title && (
              <h3
                className="text-2xl font-semibold text-white mb-2"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
              >
                {title}
              </h3>
            )}
            {description && (
              <p
                className="text-fog-200"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
              >
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageCard
