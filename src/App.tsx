import { useEffect, useState } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Details } from './components/sections/Details'
import { Travel } from './components/sections/Travel'
import { Schedule } from './components/sections/Schedule'
import { DressCode } from './components/sections/DressCode'
import { MusicRequests } from './components/sections/MusicRequests'
import { WeddingGifts } from './components/sections/WeddingGifts'
import { WEDDING_DATE } from './constants/wedding'
import type { Countdown } from './types/countdown'

function calculateCountdown(): Countdown {
  const diff = WEDDING_DATE.getTime() - Date.now()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isPast: false,
  }
}

function App() {
  const [countdown, setCountdown] = useState<Countdown>(calculateCountdown)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero countdown={countdown} />
        <About />
        <Details />
        <Schedule />
        <Travel />
        <MusicRequests />
        <DressCode />
        <WeddingGifts />
      </main>
      <Footer />
    </>
  )
}

export default App
