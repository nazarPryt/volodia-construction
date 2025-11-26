interface CategoryCardProps {
  icon: string
  title: string
  description: string
}

export default function CategoryCard({ icon, title, description }: CategoryCardProps) {
  return (
    <div className="bg-card rounded-lg border p-6 text-center">
      <div className="mb-3 text-4xl">{icon}</div>
      <h3 className="text-foreground mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  )
}
