import { Section } from '../ui/Section'

export function About() {
  return (
    <Section
      id="pribeh"
      title="Náš příběh"
      subtitle="Klára & Kristýna"
      className="[&_header_h2]:text-primary-green [&_header_p]:text-primary-green [&_header_.h-px]:bg-primary-green/50"
    >
      <div className="space-y-8 text-center font-body text-[0.95rem] font-normal leading-[1.9] text-primary-green sm:space-y-10 sm:text-[1.05rem]">
        <p>
          Jsme prostě dvě holky, co se milujou a řekly si, že spolu prožijou
          život.
        </p>
        <p>
          Reinišův statek v Poniklé je náš splněný sen. Chceme uvolněnou oslavu
          v přírodě s těmi, na kterých nám záleží nejvíce.
        </p>
      </div>
    </Section>
  )
}
