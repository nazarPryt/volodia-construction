interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className="mb-4 text-5xl">{icon}</div>
      <h3 className="text-foreground mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  )
}

FeatureCard.displayName = 'FeatureCard'
