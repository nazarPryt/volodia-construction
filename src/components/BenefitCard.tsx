interface BenefitCardProps {
  value: string
  label: string
}

export default function BenefitCard({ value, label }: BenefitCardProps) {
  return (
    <div className="group border-border bg-background-card hover:border-border-hover hover:bg-background-hover rounded-lg border p-6 text-center transition-all">
      <div className="font-heading text-primary mb-3 text-4xl font-medium">{value}</div>
      <div className="text-text-muted text-sm font-medium tracking-wider uppercase">{label}</div>
    </div>
  )
}
