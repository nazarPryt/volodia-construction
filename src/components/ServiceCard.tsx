import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon?: string
  link?: string
}

export default function ServiceCard({ title, description, icon = '🔧', link }: ServiceCardProps) {
  const content = (
    <div className="group bg-card h-full rounded-lg border p-6 transition-all hover:border-blue-500 hover:shadow-lg">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-foreground mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
      {link && (
        <div className="mt-4 text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-700">
          Детальніше →
        </div>
      )}
    </div>
  )

  if (link) {
    return <Link href={link}>{content}</Link>
  }

  return content
}
