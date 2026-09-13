import { MAP_URL, invitation, scheduleDays } from '../data/invitation'

export default function Schedule() {
  return (
    <section className="wed010-schedule-section" id="gallery">
      <div className="wed010-schedule-container">
        <div>
          <h2 className="wed010-heading">{invitation.scheduleHeading}</h2>
        </div>

        {scheduleDays.map((day) => (
          <div className="wed010-stage wed010-single" key={day.label}>
            <div className="wed010-photoWrap">
              <img className="wed010-photo" src={day.image} alt={day.title} />
            </div>
            <div className="wed010-card">
              <h3 className="wed010-cardTitle">{day.title}</h3>
              <div className="wed010-dateTop">{day.date}</div>
              <div className="wed010-gap" />
              <div className="wed010-eventsList">
                {day.events.map((event) => (
                  <div className="wed010-eventRow" key={event.name}>
                    <span className="wed010-eventName">{event.name}</span>
                    <span className="wed010-eventTime">{event.time}</span>
                  </div>
                ))}
              </div>
              <p className="wed010-address">{day.address}</p>
              <a className="wed010-mapBtn" href={MAP_URL} target="_blank" rel="noreferrer">
                View in Map
              </a>
            </div>
          </div>
        ))}

        <div className="wed010-controls">
          <button className="wed010-namePill" type="button">
            {scheduleDays[0].label}
          </button>
        </div>
      </div>

      <img src="/assets/decorations/flower-tl.webp" className="wed010-design-top" alt="" aria-hidden="true" />
      <img src="/assets/decorations/flower-br.webp" className="wed010-design-bottom" alt="" aria-hidden="true" />
    </section>
  )
}
