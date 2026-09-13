import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Couple from './components/Couple'
import Wishes from './components/Wishes'
import SendWishes from './components/SendWishes'
import Schedule from './components/Schedule'
import MusicButton from './components/MusicButton'
import Footer from './components/Footer'
import { initialWishes } from './data/invitation'

export default function App() {
  const [wishes, setWishes] = useState(initialWishes)

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  const addWish = (wish) => {
    setWishes((prev) => [...prev, wish])
  }

  return (
    <div className="wed010-wrapper wed010-theme">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <Couple />
        <Wishes wishes={wishes} />
        <SendWishes onSubmit={addWish} />
        <Schedule />
      </main>
      <MusicButton />
      <Footer />
    </div>
  )
}
