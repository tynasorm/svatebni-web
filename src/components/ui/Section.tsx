import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  alternate?: boolean
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  alternate = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24 md:px-12 md:py-32 lg:px-20 ${
        alternate ? 'bg-base-beige/30' : 'bg-off-white'
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-10 text-center sm:mb-14">
          {title && (
            <h2 className="font-heading text-3xl tracking-[0.02em] text-primary-green sm:text-4xl md:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={`font-body text-[10px] font-normal uppercase tracking-[0.28em] text-warm-brown sm:text-xs sm:tracking-[0.3em] ${
                title ? 'mt-4 sm:mt-5' : ''
              }`}
            >
              {subtitle}
            </p>
          )}
          <div className="mx-auto mt-6 h-px w-14 bg-accent-sage sm:mt-8 sm:w-16" />
        </header>
        {children}
      </div>
    </section>
  )
}
