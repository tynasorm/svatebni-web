import type { Countdown } from '../../types/countdown'
import { WEDDING_DATE_SHORT, WEDDING_LOCATION } from '../../constants/wedding'
import handCoupe from '../../assets/hero-hand-coupe.png'
import handMartini from '../../assets/hero-hand-martini.png'

type HeroProps = {
  countdown: Countdown
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center px-0.5 sm:px-2">
      <span className="font-body text-xl font-normal tabular-nums text-[#E9D7C4] sm:text-3xl md:text-4xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 font-body text-[8px] uppercase tracking-widest text-[#E9D7C4]/80 sm:mt-2 sm:text-[10px]">
        {label}
      </span>
    </div>
  )
}

export function Hero({ countdown }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative -mt-[3.5rem] flex scroll-mt-24 items-center justify-center overflow-hidden px-4 pt-[7.5rem] pb-28 sm:-mt-[4.25rem] sm:min-h-[100svh] sm:px-8 sm:pt-[4.25rem] sm:pb-12 md:px-12"
      style={{
        background:
          'radial-gradient(ellipse at center, #6D7350 0%, #5F6546 72%, #565B3E 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute -left-24 top-1/4 hidden h-72 w-72 rounded-full bg-[#E9D7C4]/10 blur-3xl sm:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/3 hidden h-80 w-80 rounded-full bg-[#FAF7F2]/10 blur-3xl sm:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 left-1/3 hidden h-64 w-64 rounded-full bg-[#899064]/15 blur-3xl sm:block"
        aria-hidden="true"
      />

      {/* Toast illustrations — from edges, mid-height so they sit in open space */}
      <img
        src={handCoupe}
        alt=""
        aria-hidden="true"
        className="hero-float-a pointer-events-none absolute top-[52%] left-0 z-[1] w-[5.75rem] select-none opacity-45 sm:top-auto sm:bottom-[18%] sm:w-44 sm:opacity-65 md:w-52 lg:w-60 lg:opacity-70"
      />
      <img
        src={handMartini}
        alt=""
        aria-hidden="true"
        className="hero-float-b pointer-events-none absolute top-[38%] right-0 z-[1] w-[5.5rem] select-none opacity-40 sm:top-[24%] sm:w-40 sm:opacity-60 md:w-48 lg:w-56 lg:opacity-70"
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <p className="mb-3 font-body text-[10px] font-normal uppercase tracking-[0.3em] text-[#E9D7C4]/90 sm:mb-8 sm:text-xs sm:tracking-[0.35em]">
          Budeme se brát
        </p>

        <h1 className="font-heading text-[2.15rem] leading-[1.08] tracking-[0.02em] text-[#E9D7C4] sm:text-5xl sm:leading-[1.05] md:text-7xl lg:text-[5.75rem]">
          Klára{' '}
          <span className="inline-block font-heading italic font-normal tracking-normal">
            &
          </span>{' '}
          Kristýna
        </h1>

        <div className="mx-auto my-4 h-px w-16 bg-[#E9D7C4]/60 sm:my-10 sm:w-24" />

        <p className="font-body text-[0.95rem] font-normal tracking-[0.12em] text-[#E9D7C4] sm:text-lg sm:tracking-[0.15em] md:text-xl">
          {WEDDING_DATE_SHORT}
        </p>
        <p className="mt-2 max-w-[16rem] font-body text-[10px] font-normal uppercase leading-relaxed tracking-[0.18em] text-[#E9D7C4]/80 sm:mt-5 sm:max-w-none sm:text-sm sm:tracking-[0.28em]">
          {WEDDING_LOCATION}
        </p>

        <div className="mt-6 w-full sm:mt-14">
          {countdown.isPast ? (
            <p className="font-body text-sm font-normal uppercase tracking-[0.28em] text-[#E9D7C4]">
              Dnes je náš velký den
            </p>
          ) : (
            <div className="mx-auto flex justify-center gap-5 sm:gap-8 md:gap-12">
              <CountdownUnit value={countdown.days} label="Dní" />
              <CountdownUnit value={countdown.hours} label="Hodin" />
              <CountdownUnit value={countdown.minutes} label="Minut" />
              <CountdownUnit value={countdown.seconds} label="Sekund" />
            </div>
          )}
        </div>

        <a
          href="#kdy-a-kde"
          className="mt-6 inline-flex min-h-11 w-full max-w-xs items-center justify-center rounded-full bg-[#E9D7C4] px-6 py-3 font-body text-[11px] font-normal uppercase tracking-[0.18em] text-[#543B27] transition-all duration-300 hover:bg-[#FAF7F2] hover:shadow-[0_8px_24px_rgba(84,59,39,0.18)] sm:mt-12 sm:min-h-12 sm:w-auto sm:max-w-none sm:px-8 sm:py-3.5 sm:text-xs sm:tracking-[0.2em]"
        >
          Program & Informace
        </a>
      </div>
    </section>
  )
}
