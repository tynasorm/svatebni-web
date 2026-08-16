import { Section } from '../ui/Section'

const palette = [
  {
    en: 'Dusty Olive',
    cs: 'Hlavní olivová',
    hex: '#6D7350',
    className: 'bg-primary-green',
  },
  {
    en: 'Palm Leaf',
    cs: 'Jemná šalvěj',
    hex: '#899064',
    className: 'bg-accent-sage',
  },
  {
    en: 'Almond Cream',
    cs: 'Mandlová krémová',
    hex: '#E9D7C4',
    className: 'bg-base-beige ring-1 ring-warm-brown/20',
  },
  {
    en: 'Coffee Bean',
    cs: 'Kávově hnědá',
    hex: '#704F33',
    className: 'bg-warm-brown',
  },
  {
    en: 'Deep Walnut',
    cs: 'Tmavý ořech',
    hex: '#543B27',
    className: 'bg-deep-espresso',
  },
]

export function DressCode() {
  return (
    <Section
      id="dresscode"
      title="Co na sebe"
      subtitle="Dress code"
      alternate
      className="[&_header_h2]:text-deep-espresso [&_header_p]:text-deep-espresso [&_header_.h-px]:bg-deep-espresso/45"
    >
      <div className="space-y-10 sm:space-y-12">
        <div className="rounded-2xl bg-off-white px-4 py-8 shadow-[0_10px_28px_rgba(84,59,39,0.06)] sm:rounded-3xl sm:px-6 sm:py-10 md:px-8">
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 md:max-w-none md:grid-cols-5 md:gap-6">
            {palette.map((swatch) => (
              <div
                key={swatch.hex}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div
                  className={`h-14 w-14 rounded-full shadow-sm sm:h-16 sm:w-16 ${swatch.className}`}
                  title={`${swatch.en} – ${swatch.cs}`}
                />
                <div className="px-1 text-center">
                  <p className="font-body text-[11px] font-normal leading-snug tracking-wide text-deep-espresso sm:text-xs">
                    {swatch.cs}
                  </p>
                  <p className="mt-0.5 font-body text-[10px] tracking-wide text-deep-espresso/80">
                    {swatch.en}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wider text-deep-espresso/65">
                    {swatch.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto max-w-xl text-center font-body text-[0.95rem] font-normal leading-[1.85] text-deep-espresso sm:text-base">
          Budeme moc rády, když se barevně sladíte s naší přírodní paletou.
          Pro pány: oblek není nutností, lněná košile a pohodlné kalhoty budou
          naprosto skvělé!
        </p>
      </div>
    </Section>
  )
}
