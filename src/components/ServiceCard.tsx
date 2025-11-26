import Link from 'next/link'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  details?: string[]
  price?: string
  link?: string
}

export default function ServiceCard({ icon, title, description, details, price, link }: ServiceCardProps) {
  const content = (
    <>
      <div className="mb-4 flex items-start justify-between">
        <div className="text-5xl">{icon}</div>
        {price && <div className="bg-primary rounded-lg px-4 py-2 text-sm font-semibold text-white">{price}</div>}
      </div>
      <h3 className="font-heading text-foreground mb-3 text-2xl font-medium">{title}</h3>
      <p className="text-text-muted mb-4">{description}</p>
      {details && details.length > 0 && (
        <div className="mb-4">
          <h4 className="text-foreground mb-2 font-semibold">Що входить:</h4>
          <ul className="text-text-muted space-y-1 text-sm">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )

  if (link) {
    return (
      <Link
        href={link}
        className="group border-border bg-background-card hover:border-border-hover hover:bg-background-hover block rounded-lg border p-6 transition-all"
      >
        {content}
      </Link>
    )
  }

  return (
    <div className="group border-border bg-background-card hover:border-border-hover hover:bg-background-hover rounded-lg border p-6 transition-all">
      {content}
    </div>
  )
}
