interface PrincipleItemProps {
  number: number
  title: string
  description: string
}

export default function PrincipleItem({ number, title, description }: PrincipleItemProps) {
  return (
    <div className="flex gap-4">
      <div className="bg-primary text-foreground flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl">
        {number}
      </div>
      <div>
        <h3 className="text-foreground mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-text-muted">{description}</p>
      </div>
    </div>
  )
}
