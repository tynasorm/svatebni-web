import { WEDDING_DATE_LONG } from '../../constants/wedding'
import { Section } from '../ui/Section'

const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=50.677953,15.47735&hl=cs&z=17&t=k&output=embed'

const MAP_EXTERNAL_HREF = 'https://maps.app.goo.gl/BDJ7ZeKD9y13U8GA6'

export function Details() {
  return (
    <Section
      id="kdy-a-kde"
      title="Kdy a kde"
      subtitle="Den D"
      alternate
      className="[&_header_h2]:text-deep-espresso [&_header_p]:text-deep-espresso/75 [&_header_.h-px]:bg-deep-espresso/35"
    >
      <div className="mx-auto flex max-w-md flex-col items-center gap-5 text-center sm:gap-6">
        <div className="w-full">
          <p className="font-heading text-2xl leading-snug tracking-[0.02em] text-deep-espresso sm:text-3xl">
            {WEDDING_DATE_LONG}
          </p>
        </div>

        <div className="w-full space-y-2">
          <p className="font-heading text-2xl leading-snug tracking-[0.02em] text-deep-espresso sm:text-3xl">
            Reinišův statek
          </p>
          <p className="font-body text-sm font-normal leading-relaxed text-deep-espresso sm:text-[0.95rem]">
            Poniklá 340, 514 01 Poniklá
          </p>
        </div>

        <div className="mt-4 w-full max-w-2xl sm:mt-6">
          <div className="overflow-hidden rounded-2xl border border-base-beige shadow-[0_12px_32px_rgba(84,59,39,0.08)]">
            <iframe
              title="Mapa — Reinišův statek, Poniklá"
              src={MAP_EMBED_SRC}
              className="block h-[280px] w-full border-0 sm:h-[350px] md:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <a
            href={MAP_EXTERNAL_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full border border-deep-espresso/40 bg-transparent px-6 py-3 font-body text-[11px] font-normal uppercase tracking-[0.18em] text-deep-espresso transition-colors duration-300 hover:border-deep-espresso hover:bg-deep-espresso hover:text-base-beige sm:mt-7 sm:w-auto sm:max-w-none sm:px-7 sm:tracking-[0.2em]"
          >
            Otevřít v Google Mapách
          </a>
        </div>
      </div>
    </Section>
  )
}
