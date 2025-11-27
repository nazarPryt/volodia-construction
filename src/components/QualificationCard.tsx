interface QualificationCardProps {
  icon: string
  title: string
  description: string
  delay?: number
}

export default function QualificationCard({ icon, title, description, delay }: QualificationCardProps) {
  return (
    <div
      data-aos="flip-left"
      data-aos-delay={delay}
      className="border-border bg-background-card hover:border-border-hover hover:bg-background-hover rounded-lg border p-6 transition-all"
    >
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-foreground mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-text-muted text-sm">{description}</p>
    </div>
  )
}
