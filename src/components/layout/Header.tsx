import { useEffect, useId, useState } from 'react'

const navLinks = [
  { href: '#kdy-a-kde', label: 'Kdy a kde' },
  { href: '#harmonogram', label: 'Harmonogram' },
  { href: '#doprava', label: 'Doprava' },
  { href: '#pisnicky', label: 'Písničky' },
  { href: '#dresscode', label: 'Co na sebe' },
  { href: '#dary', label: 'Svatební dary' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [overHero, setOverHero] = useState(true)
  const menuId = useId()

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById('hero')
      if (!hero) return
      // Lišta je „na hero“, dokud spodní okraj hero sahá pod horní lištu
      setOverHero(hero.getBoundingClientRect().bottom > 72)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const solid = !overHero || menuOpen

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-[#FAF7F2]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4 md:px-12">
        <a
          href="#hero"
          className={`font-heading text-lg tracking-[0.04em] transition-colors sm:text-xl ${
            solid
              ? 'text-deep-espresso hover:text-warm-brown'
              : 'text-[#E9D7C4] hover:text-[#FAF7F2]'
          }`}
          onClick={closeMenu}
        >
          K & K
        </a>

        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-body text-[11px] font-normal uppercase tracking-[0.2em] transition-colors ${
                  solid
                    ? 'text-warm-brown hover:text-primary-green'
                    : 'text-[#E9D7C4]/90 hover:text-[#FAF7F2]'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors md:hidden ${
            solid
              ? 'text-primary-green hover:bg-base-beige/60'
              : 'text-[#E9D7C4] hover:bg-[#E9D7C4]/15'
          }`}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Zavřít' : 'Menu'}</span>
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                menuOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] block h-0.5 w-full rounded-full bg-current transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] block h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                menuOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 top-[3.25rem] z-40 sm:top-[4.25rem] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-deep-espresso/40 backdrop-blur-[2px]"
            aria-label="Zavřít menu"
            onClick={closeMenu}
          />

          <div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Navigace"
            className="absolute inset-x-0 top-0 border-b border-[#E9D7C4]/40 bg-[#FAF7F2] px-4 py-6 shadow-[0_16px_40px_rgba(84,59,39,0.12)] sm:px-8"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-xl px-4 py-3.5 font-body text-sm font-normal uppercase tracking-[0.18em] text-warm-brown transition-colors hover:bg-base-beige/50 hover:text-primary-green"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
