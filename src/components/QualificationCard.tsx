interface QualificationCardProps {
  icon: string
  title: string
  description: string
}

export default function QualificationCard({ icon, title, description }: QualificationCardProps) {
  return (
    <div className="border-border bg-background-card hover:border-border-hover hover:bg-background-hover rounded-lg border p-6 transition-all">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-foreground mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-text-muted text-sm">{description}</p>
    </div>
  )
}
