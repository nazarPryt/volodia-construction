interface FeatureCardProps {
  icon: string
  title: string
  description: string
  delay?: number
}

export default function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <div className="text-center" data-aos="fade-up" data-aos-delay={delay}>
      <div className="mb-4 text-5xl">{icon}</div>
      <h3 className="text-foreground mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  )
}

FeatureCard.displayName = 'FeatureCard'
