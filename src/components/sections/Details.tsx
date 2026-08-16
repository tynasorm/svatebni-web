import { WEDDING_DATE_LONG, WEDDING_LOCATION } from '../../constants/wedding'
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
    >
      <div className="space-y-8 text-center sm:space-y-10">
        <div>
          <h3 className="font-heading text-xl text-primary-green sm:text-2xl">
            Datum
          </h3>
          <p className="mt-3 font-body font-normal text-warm-brown">
            {WEDDING_DATE_LONG}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-xl text-primary-green sm:text-2xl">
            Místo
          </h3>
          <p className="mt-3 break-words font-body font-normal text-warm-brown">
            {WEDDING_LOCATION}
          </p>
        </div>

        <div className="mx-auto w-full max-w-2xl">
          <p className="mb-4 font-body italic text-warm-brown sm:mb-5">
            Poniklá 340, 514 01 Poniklá
          </p>
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
            className="mt-5 inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full border border-primary-green bg-base-beige px-6 py-3 font-body text-[11px] font-normal uppercase tracking-[0.18em] text-deep-espresso transition-colors duration-300 hover:border-accent-sage hover:bg-primary-green hover:text-base-beige sm:mt-6 sm:w-auto sm:max-w-none sm:px-7 sm:tracking-[0.2em]"
          >
            Otevřít v Google Mapách
          </a>
        </div>
      </div>
    </Section>
  )
}
