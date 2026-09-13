import { useState } from 'react'

export default function Wishes({ wishes }) {
  const [index, setIndex] = useState(0)
  const total = wishes.length || 1
  const safeIndex = wishes.length ? index % wishes.length : 0
  const current = wishes[safeIndex]

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  return (
    <section className="wed010-wishes">
      <img src="/assets/decorations/aboutdesign.svg" className="wed010-design d1" alt="" aria-hidden="true" />
      <img src="/assets/decorations/aboutdesign.svg" className="wed010-design d2" alt="" aria-hidden="true" />
      <img src="/assets/decorations/aboutdesign.svg" className="wed010-design d3" alt="" aria-hidden="true" />
      <img src="/assets/decorations/aboutdesign.svg" className="wed010-design d4" alt="" aria-hidden="true" />

      <div className="wed010-wishes-inner">
        <div className="wed010-wishes-left">
          <h2 className="wed010-wishes-title">Wishes for the couple</h2>
        </div>
        <div className="wed010-wishes-right">
          <div className="wed010-wish-card">
            <div className="wed010-wishes-whiteBg">
              {current ? (
                <>
                  <h3 className="wed010-wisher-name">{current.name}</h3>
                  <p className="wed010-wish-message">{current.message}</p>
                </>
              ) : (
                <p className="wed010-wish-message">No wishes yet. Be the first to send one!</p>
              )}
              <div className="wed010-wish-footer">
                <button className="wed010-arrow-wishes" onClick={prev} aria-label="Previous wish">
                  &lt;
                </button>
                <span className="wed010-counter-wishes">
                  {safeIndex + 1} of {total}
                </span>
                <button className="wed010-arrow-wishes" onClick={next} aria-label="Next wish">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
