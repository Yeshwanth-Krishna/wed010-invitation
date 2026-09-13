import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Gallery', target: 'gallery' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      const sections = ['home', 'about', 'gallery']
      let current = 'home'
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="wed010-navbar-section">
      <nav className="wed010-navbar" aria-label="Invitation sections">
        <div className="wed010-navbar-list">
          <nav className="shared-navbar fixed wed010-navbar-button">
            {LINKS.map((link) => (
              <span key={link.target} role="button" tabIndex={0} aria-label={link.label} className={`shared-nav-item ${active === link.target ? 'active' : ''}`} onClick={() => go(link.target)} onKeyDown={(e) => e.key === 'Enter' && go(link.target)}><span className="nav-label">{link.label}</span></span>
            ))}
          </nav>
        </div>
      </nav>
    </section>
  )
}
