import { Section } from '../ui/Section'

const schedule = [
  { time: '11:00', event: 'Příjezd na statek — odložení věcí, případné ubytování a něco dobrého na přivítanou' },
  { time: '12:30', event: 'Společný přesun na místo obřadu' },
  { time: '13:00', event: 'Svatební obřad' },
  { time: '14:00', event: 'Přesun na oběd' },
  { time: '15:00', event: '… a začíná pravá party' },
]

export function Schedule() {
  return (
    <Section
      id="harmonogram"
      title="Harmonogram"
      subtitle="Průběh dne"
      className="[&_header_h2]:text-primary-green [&_header_p]:text-primary-green [&_header_.h-px]:bg-primary-green/50"
    >
      <p className="mb-10 text-center font-body text-[0.95rem] font-normal leading-[1.85] text-primary-green sm:mb-12 sm:text-base">
        Na statek můžete dorazit už kolem 11. hodiny. Bude dost času si v klidu
        odložit věci a případně se ubytovat, dát si něco dobrého na přivítanou a
        nasát atmosféru. Kolem půl jedné se pak všichni společně přesuneme na
        místo obřadu, kde si ve 13:00 řekneme svoje ANO.
      </p>

      <div className="relative mx-auto w-full max-w-lg">
        <div
          className="absolute top-2 bottom-2 left-[2.85rem] w-px bg-primary-green/25 sm:left-[4.25rem] md:left-[5rem]"
          aria-hidden="true"
        />

        <ul className="space-y-8 sm:space-y-12">
          {schedule.map((item) => (
            <li
              key={item.time}
              className="relative flex gap-3 sm:gap-6 md:gap-8"
            >
              <time
                dateTime={item.time}
                className="w-12 shrink-0 pt-0.5 text-right font-body text-xs font-bold tabular-nums text-primary-green sm:w-14 sm:text-sm md:w-16 md:text-base"
              >
                {item.time}
              </time>

              <div className="relative flex shrink-0 flex-col items-center">
                <span className="relative z-10 mt-1.5 h-2.5 w-2.5 rounded-full bg-primary-green ring-4 ring-off-white" />
              </div>

              <p className="min-w-0 flex-1 pt-0.5 font-body text-[0.95rem] font-normal leading-[1.85] text-primary-green sm:text-base">
                {item.event}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
