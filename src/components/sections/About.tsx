import { Section } from '../ui/Section'

export function About() {
  return (
    <Section
      id="pribeh"
      title="A je to tady!"
      subtitle="Klára & Kristýna"
      className="[&_header_h2]:text-primary-green [&_header_p]:text-primary-green [&_header_.h-px]:bg-primary-green/50"
    >
      <div className="space-y-8 text-center font-body text-[0.95rem] font-normal leading-[1.9] text-primary-green sm:space-y-10 sm:text-[1.05rem]">
        <p>
          Pokud čtete tyhle řádky, znamená to, že patříte mezi lidi, se kterými
          chceme strávit náš velký den. A za to jsme moc rády.
        </p>
        <p>
          Na webu najdete všechny důležité informace, které by se vám mohly hodit.
          Nic nám potvrzovat nemusíte, ale pokud víte, že nebudete moct dorazit,
          dejte nám prosím vědět.
        </p>
        <p>Už teď se na vás všechny moc těšíme!</p>
      </div>
    </Section>
  )
}
