import { Section } from '../ui/Section'

const schedule = [
  { time: '12:00', event: 'Příjezd na statek — welcome drink, odložení věcí' },
  { time: '13:00', event: 'Svatební obřad pod širým nebem' },
  { time: '14:00', event: 'Focení & Gratulace' },
  { time: '15:00', event: 'Garden Buffet (uvolněné grilování)' },
  { time: '17:30', event: 'První tanec & Krájení dortu' },
  { time: '20:00', event: 'Táborák, opékání marshmallows a letní kino pod hvězdami' },
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
        Můžete dorazit už ve 12:00 na statek, odložit si věci a v klidu se
        připravit — nebo přijít rovnou ve 13:00 na místo obřadu. Obojí je v
        pořádku, vyberte si, co vám víc sedne.
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
