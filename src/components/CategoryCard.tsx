interface CategoryCardProps {
  icon: string
  title: string
  description: string
  delay?: number
}

export default function CategoryCard({ icon, title, description, delay }: CategoryCardProps) {
  return (
    <div className="bg-card rounded-lg border p-6 text-center" data-aos="fade-up" data-aos-delay={delay}>
      <div className="mb-3 text-4xl">{icon}</div>
      <h3 className="text-foreground mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  )
}
