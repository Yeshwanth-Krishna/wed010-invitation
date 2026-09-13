import { useEffect, useState } from 'react'
import { WEDDING_DATE, invitation } from '../data/invitation'

function getParts() {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getParts)

  useEffect(() => {
    const id = setInterval(() => setTime(getParts()), 1000)
    return () => clearInterval(id)
  }, [])

  const boxes = [
    { value: time.days, label: 'Days' },
    { value: time.hrs, label: 'Hrs' },
    { value: time.mins, label: 'Mins' },
    { value: time.secs, label: 'Secs' },
  ]

  return (
    <section className="wed010-countdown-section">
      <div className="wed010-countdown-content">
        <h2 className="wed010-countdown-title">{invitation.countdownTitle}</h2>
        <div className="wed010-countdown-wrapper">
          <div className="shared-countdown wed010-countdown">
            {boxes.map((box) => (
              <div className="time-box" key={box.label}>
                <span className="num">{box.value}</span>
                <span className="label">{box.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
