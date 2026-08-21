import { Section } from '../ui/Section'

export function Travel() {
  return (
    <Section
      id="doprava"
      title="Doprava a ubytování"
      subtitle="Jak se k nám dostat"
      alternate
      className="[&_header_h2]:text-deep-espresso [&_header_p]:text-deep-espresso [&_header_.h-px]:bg-deep-espresso/45"
    >
      <div className="grid w-full gap-8 sm:gap-10">
        <div className="border-l-2 border-deep-espresso pl-4 sm:pl-6">
          <h3 className="font-heading text-xl text-deep-espresso md:text-2xl">
            Doprava
          </h3>
          <p className="mt-3 font-body text-[0.95rem] font-normal leading-[1.85] text-deep-espresso sm:text-base">
            Auta nechte praskat ve švech! Parkovací místa u statku nejsou
            bezedná, tak budeme vděční, když se poskládáte do vozů v co
            největším počtu.
          </p>
          <p className="mt-3 font-body text-[0.95rem] font-normal leading-[1.85] text-deep-espresso sm:text-base">
            Pro vášnivé turistické nadšence je tu i pěší varianta – od
            Kavánovského kolene vás čeká minimálně půlhodinová procházka, tak
            zvažte podle toho i volbu střevíců.
          </p>
        </div>

        <div className="border-l-2 border-deep-espresso pl-4 sm:pl-6">
          <h3 className="font-heading text-xl text-deep-espresso md:text-2xl">
            Ubytování
          </h3>
          <p className="mt-3 font-body text-[0.95rem] font-normal leading-[1.85] text-deep-espresso sm:text-base">
            Pokud nejste z Poniklé a neplánujete jít domů po svých, střechu nad
            hlavou vám zařídíme. Přesné informace vám dáme vědět s dostatečným
            předstihem.
          </p>
          <p className="mt-3 font-body text-[0.95rem] font-normal leading-[1.85] text-deep-espresso sm:text-base">
            Pro ty z vás, kteří budou spát o kousek dál ve vesnici, se navíc
            pokusíme zajistit noční odvoz autem, abyste nemuseli šlapat pěšky. Ti
            šťastnější to budou mít jen pár schodů do patra přímo na statku.
          </p>
        </div>
      </div>
    </Section>
  )
}
