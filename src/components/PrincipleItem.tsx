interface PrincipleItemProps {
  number: number
  title: string
  description: string
  delay?: number
}

export default function PrincipleItem({ number, title, description, delay }: PrincipleItemProps) {
  return (
    <div className="flex gap-4" data-aos="fade-right" data-aos-delay={delay}>
      <div className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl text-white">
        {number}
      </div>
      <div>
        <h3 className="text-foreground mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-text-muted">{description}</p>
      </div>
    </div>
  )
}
