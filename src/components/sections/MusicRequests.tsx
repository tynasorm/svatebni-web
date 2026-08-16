import { useId, useState } from 'react'
import { Section } from '../ui/Section'

const inputClassName =
  'w-full min-h-12 rounded-xl border border-deep-espresso/25 bg-off-white px-4 py-3 font-body text-base text-deep-espresso placeholder:text-deep-espresso/45 outline-none transition-shadow focus:border-deep-espresso focus:ring-2 focus:ring-deep-espresso/20'

const MAX_SONGS = 5

export function MusicRequests() {
  const baseId = useId()
  const [songCount, setSongCount] = useState(1)

  return (
    <Section
      id="pisnicky"
      title="Písničky na přání"
      subtitle="Pro plný parket"
      className="[&_header_h2]:text-deep-espresso [&_header_p]:text-deep-espresso [&_header_.h-px]:bg-deep-espresso/45"
    >
      <p className="mb-8 text-center font-body text-[0.95rem] font-normal leading-[1.85] text-deep-espresso sm:mb-10 sm:text-base">
        Chceme, aby byl parket plný od začátku do konce! Napište nám, při čem
        nejraději tancujete nebo jakou písničku byste si rádi poslechli.
      </p>

      <form
        action="https://formspree.io/f/xzepadpo"
        method="POST"
        className="mx-auto w-full max-w-lg rounded-2xl border border-deep-espresso/20 bg-base-beige/50 p-5 shadow-[0_10px_28px_rgba(84,59,39,0.06)] sm:p-8"
      >
        <input
          type="hidden"
          name="_subject"
          value="Svatební web - Nová písnička na přání!"
        />
        <input
          type="hidden"
          name="_next"
          value="https://svatebni-web-two.vercel.app/#pisnicky"
        />

        <div className="space-y-4">
          {Array.from({ length: songCount }, (_, index) => {
            const number = index + 1
            const fieldId = `${baseId}-song-${number}`
            const fieldName =
              songCount === 1
                ? 'Písnička a interpret'
                : `Písnička a interpret ${number}`

            return (
              <div key={fieldId} className="flex gap-2">
                <div className="min-w-0 flex-1">
                  <label htmlFor={fieldId} className="sr-only">
                    {number === 1
                      ? 'Interpret a název písničky'
                      : `Další písnička ${number}`}
                  </label>
                  <input
                    id={fieldId}
                    type="text"
                    name={fieldName}
                    placeholder={
                      number === 1
                        ? 'Interpret a název písničky'
                        : `Další tip — interpret a název`
                    }
                    required={number === 1}
                    autoComplete="off"
                    className={inputClassName}
                  />
                </div>

                {number > 1 && number === songCount && (
                  <button
                    type="button"
                    onClick={() => setSongCount((count) => Math.max(1, count - 1))}
                    className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl border border-deep-espresso/25 px-3 font-body text-xs uppercase tracking-wider text-deep-espresso transition-colors hover:border-deep-espresso hover:text-deep-espresso"
                    aria-label={`Odebrat tip ${number}`}
                  >
                    Odebrat
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-4 flex w-full flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          {songCount < MAX_SONGS && (
            <button
              type="button"
              onClick={() => setSongCount((count) => Math.min(MAX_SONGS, count + 1))}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-deep-espresso/40 bg-transparent px-5 py-2.5 font-body text-[11px] font-normal uppercase tracking-[0.18em] text-deep-espresso transition-colors duration-300 hover:border-deep-espresso hover:bg-deep-espresso/5 sm:w-auto"
            >
              + Přidat další tip
            </button>
          )}

          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-deep-espresso px-7 py-3 font-body text-[11px] font-normal uppercase tracking-[0.2em] text-base-beige transition-colors duration-300 hover:bg-warm-brown sm:w-auto"
          >
            Odeslat tip
          </button>
        </div>
      </form>
    </Section>
  )
}
