interface JsonLdScriptProps {
  data: object
}

const JsonLdScript = ({ data }: JsonLdScriptProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
    />
  )
}

export default JsonLdScript
