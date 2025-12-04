import Link from 'next/link'
import { PATH } from '@/config/PATH'
import BenefitCard from '@/components/BenefitCard'
import { HeroSection, Benefit } from '@/sanity/types/homePage'
import { OwnerInfo } from '@/sanity/types/ownerInfo'

interface HeroProps {
  hero: HeroSection
  benefits: Benefit[]
  ownerInfo: OwnerInfo
}

export default function Hero({ hero, benefits, ownerInfo }: HeroProps) {
  return (
    <section className="bg-background relative w-full overflow-hidden py-20 md:py-32">
      <div className="bg-grid absolute inset-0 opacity-50" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge/Tag */}
          <div
            className="border-border bg-background-secondary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2"
            data-aos="fade-down"
          >
            <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
            <span className="text-text-dim text-xs font-medium tracking-wider uppercase">{hero.badge}</span>
          </div>

          <h1
            className="font-heading text-foreground mb-6 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {hero.title}{' '}
            <span className="from-primary to-primary-hover bg-gradient-to-r bg-clip-text text-transparent">
              {hero.highlightedText}
            </span>
          </h1>

          <p
            className="text-text-muted mx-auto mb-8 max-w-2xl text-lg sm:text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {hero.description}
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay="300">
            <a href={`tel:${ownerInfo.phone.number}`} className="btn-primary inline-flex items-center justify-center">
              {hero.ctaPrimaryText}
            </a>
            <Link
              href={PATH.PORTFOLIO}
              className="border-foreground text-foreground hover:bg-foreground hover:text-background inline-flex items-center justify-center border bg-transparent px-8 py-4 text-base font-medium transition-all"
            >
              {hero.ctaSecondaryText}
            </Link>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} value={benefit.value} label={benefit.label} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
