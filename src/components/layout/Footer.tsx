import { WEDDING_DATE_SHORT, WEDDING_LOCATION } from '../../constants/wedding'

export function Footer() {
  return (
    <footer className="bg-[#543B27] px-4 py-12 text-center sm:px-8 sm:py-14 md:px-12">
      <p className="font-heading text-xl text-base-beige sm:text-2xl md:text-3xl">
        Klára & Kristýna
      </p>
      <p className="mt-3 font-body text-sm font-normal tracking-wide text-base-beige/85">
        {WEDDING_DATE_SHORT}
      </p>
      <p className="mx-auto mt-2 max-w-xs font-body text-[10px] font-normal uppercase leading-relaxed tracking-[0.18em] text-base-beige/75 sm:max-w-none sm:text-xs sm:tracking-[0.22em]">
        {WEDDING_LOCATION}
      </p>
      <p className="mt-8 font-body text-[10px] font-normal uppercase tracking-[0.22em] text-base-beige sm:mt-10 sm:text-xs">
        Těšíme se na vás
      </p>
    </footer>
  )
}
