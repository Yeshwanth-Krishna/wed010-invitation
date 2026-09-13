import { couple } from '../data/invitation'
import Reveal from './Reveal'

export default function Couple() {
  return (
    <section className="wed010-couple-section" id="about">
      <div className="wed010-Aboutcouple">
        <div className="couple-container">
          <div className="couple-card wed010-bride-info">
            <Reveal variant="reveal-right" threshold={0.7} className="image-wrapperbride arch-shape">
              <img className="wed010-brideimage" src={couple.bride.image} alt="Bride" />
              <div className="wed010-bride-arch-border" />
            </Reveal>
            <Reveal variant="reveal-left" threshold={0.7} className="couplebride-info">
              <h2 className="wed010-name">{couple.bride.name}</h2>
              <p className="wed010-relation">{couple.bride.relation}</p>
              <p className="wed010-desc">{couple.bride.desc}</p>
            </Reveal>
          </div>

          <div className="couple-card wed010-groom-info">
            <Reveal variant="reveal-left" threshold={0.7} className="image-wrappergroom arch-shape delay-300">
              <img className="wed010-groomimage" src={couple.groom.image} alt="Groom" />
              <div className="wed010-groom-arch-border" />
            </Reveal>
            <Reveal variant="reveal-right" threshold={0.7} className="couplegroom-info delay-300">
              <h2 className="wed010-name">{couple.groom.name}</h2>
              <p className="wed010-relation">{couple.groom.relation}</p>
              <p className="wed010-desc">{couple.groom.desc}</p>
            </Reveal>
          </div>
        </div>

        <Reveal variant="reveal-left" threshold={0.2} className="wed010-floral-left">
          <img
            src="/assets/decorations/aboutdesign.svg"
            alt=""
            aria-hidden="true"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </Reveal>
        <Reveal variant="reveal-right" threshold={0.2} className="wed010-floral-right delay-300">
          <img
            src="/assets/decorations/aboutdesign.svg"
            alt=""
            aria-hidden="true"
            style={{ width: '100%', height: 'auto', display: 'block', transform: 'scaleX(-1)' }}
          />
        </Reveal>
      </div>
    </section>
  )
}
