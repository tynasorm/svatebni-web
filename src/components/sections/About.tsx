import { Section } from '../ui/Section'

export function About() {
  return (
    <Section id="pribeh" title="Náš příběh" subtitle="Jak to všechno začalo">
      <div className="space-y-8 text-center font-body text-[0.95rem] font-normal leading-[1.9] text-warm-brown sm:space-y-10 sm:text-[1.05rem]">
        <p className="font-heading text-xl leading-[1.5] text-primary-green sm:text-2xl md:text-3xl">
          Našly jsme svůj klidný přístav — v horách, v tichu ranní kávy
          a v objetí, které nepotřebuje slova.
        </p>
        <p>
          Klára a Kristýna milují Krkonoše, vůni jehličí za úsvitu
          a jedna druhou s jistotou, která přichází jen jednou za život.
        </p>
        <p>
          Svatba na Reinišově statku v Poniklé je náš splněný sen:
          uvolněná oslava v přírodě, obklopené těmi, které milujeme —
          bez zbytečných formalit, s otevřeným srdcem a volností
          pro radost.
        </p>
      </div>
    </Section>
  )
}
