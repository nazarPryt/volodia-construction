interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-background relative w-full overflow-hidden py-16">
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <h1 className="font-heading text-foreground mb-4 text-4xl font-medium sm:text-5xl">{title}</h1>
          <p className="text-text-muted text-lg">{description}</p>
        </div>
      </div>
    </section>
  )
}
