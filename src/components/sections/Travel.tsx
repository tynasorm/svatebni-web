import { Section } from '../ui/Section'

export function Travel() {
  return (
    <Section
      id="doprava"
      title="Doprava a ubytování"
      subtitle="Jak se k nám dostat"
    >
      <div className="grid w-full gap-8 sm:gap-10">
        <div className="border-l-2 border-primary-green pl-4 sm:pl-6">
          <h3 className="font-heading text-xl text-primary-green md:text-2xl">
            Doprava
          </h3>
          <p className="mt-3 font-body text-[0.95rem] font-normal leading-[1.85] text-warm-brown sm:text-base">
            Reinišův statek leží v krásném prostředí Krkonoš. Doporučujeme příjezd
            autem — parkování bude zajištěno. Podrobné instrukce k cestě doplníme
            blíže k datu svatby.
          </p>
        </div>

        <div className="border-l-2 border-primary-green pl-4 sm:pl-6">
          <h3 className="font-heading text-xl text-primary-green md:text-2xl">
            Ubytování
          </h3>
          <p className="mt-3 font-body text-[0.95rem] font-normal leading-[1.85] text-warm-brown sm:text-base">
            V okolí statku najdete několik možností ubytování — od penzionů po
            apartmány. Seznam doporučených míst a slevových kódů připravíme a
            sdílíme s vámi včas.
          </p>
        </div>
      </div>
    </Section>
  )
}
