import { Section } from '../ui/Section'

export function WeddingGifts() {
  return (
    <Section
      id="dary"
      title="Svatební dary"
      className="[&_header_h2]:text-primary-green [&_header_.h-px]:bg-primary-green/50"
    >
      <div className="mx-auto w-full max-w-lg space-y-5 text-center font-body text-[0.95rem] font-normal leading-[1.85] text-primary-green sm:space-y-6 sm:text-base">
        <p>
          Vaše přítomnost je pro nás ten nejkrásnější dárek. Pokud nám ale přece
          jen chcete něco věnovat, nejvíc oceníme příspěvek na naše společné
          dobrodružství — třeba na cestu, kterou plánujeme po svatbě.
        </p>
        <p>Děkujeme a těšíme se na vás!</p>
      </div>
    </Section>
  )
}
