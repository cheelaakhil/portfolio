import { useEffect, useState } from 'react'
import { config } from '../config'
import './styles/Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a className="nav-logo" href="#landing" onClick={e => { e.preventDefault(); scrollTo('#landing') }}>
          {config.name.charAt(0)}{config.name.charAt(1)}<span>.</span>
        </a>
        <ul className="nav-links">
          {['#about', '#whatido', '#career', '#work', '#contact'].map((href, i) => (
            <li key={i}>
              <a href={href} onClick={e => { e.preventDefault(); scrollTo(href) }}>
                {href.replace('#', '').replace('whatido', 'Skills').replace('career', 'Experience')}
              </a>
            </li>
          ))}
        </ul>
        <span className="nav-email">{config.email}</span>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          {[['#about', 'About'], ['#whatido', 'Skills'], ['#career', 'Experience'], ['#work', 'Projects'], ['#techstack', 'Tech Stack'], ['#contact', 'Contact']].map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={e => { e.preventDefault(); scrollTo(href) }}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar
