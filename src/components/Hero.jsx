import { MAP_URL, invitation } from '../data/invitation'

export default function Hero() {
  return (
    <section className="wed010-herosection" id="home">
      <img
        src="/assets/decorations/herotopdecoration.svg"
        className="wed010-topdecoration"
        alt=""
        aria-hidden="true"
      />
      <img
        src="/assets/decorations/herodesign.svg"
        className="wed010-design-left"
        alt=""
        aria-hidden="true"
      />
      <img
        src="/assets/decorations/herodesign.svg"
        className="wed010-design-right"
        alt=""
        aria-hidden="true"
      />

      <div className="wed010-hero-invite-content">
        <p className="invite-text">{invitation.inviteText}</p>
        <h1 className="couple-names">
          <span className="bride">{invitation.bride}</span>
          <span className="and">weds</span>
          <span className="groom">{invitation.groom}</span>
        </h1>
        <p className="wed010-invite-details">{invitation.dateLine}</p>
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="map-btn"
        >
          View in Map
        </a>
      </div>

      <img src="/assets/images/mandap.webp" alt="Mandap" className="mandap" />

      <img
        src="/assets/decorations/herobottomdesign.svg"
        className="wed010-bottomdesign-left"
        alt=""
        aria-hidden="true"
      />
      <img
        src="/assets/decorations/herobottomdesign.svg"
        className="wed010-bottomdesign-right"
        alt=""
        aria-hidden="true"
      />
    </section>
  )
}
