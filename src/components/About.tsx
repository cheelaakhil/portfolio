import { useEffect, useRef } from 'react'
import { config } from '../config'
import './styles/About.css'
import './styles/shared.css'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef}>
      <div className="about-inner">
        <div className="about-text">
          <div className="section-label reveal">About me</div>
          <h2 className="section-title reveal d1">Results-driven.<br />Data obsessed.</h2>
          {config.bio.map((p, i) => (
            <p key={i} className={`about-para reveal d${i + 2}`}>{p}</p>
          ))}
        </div>
        <div className="about-stats">
          {config.stats.map((s, i) => (
            <div key={i} className={`stat-box reveal d${i + 1}`}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
