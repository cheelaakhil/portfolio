import { useEffect, useRef } from 'react'
import { config } from '../config'
import './styles/TechStack.css'

const TechStack = () => {
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
    <section id="techstack" ref={sectionRef}>
      <div className="tech-inner">
        <div className="tech-header">
          <div className="section-label reveal">Tech stack</div>
          <h2 className="section-title reveal d1">Tools &<br />Technologies</h2>
        </div>
        {config.techRows.map((row, ri) => (
          <div key={ri} className="ticker-wrap" style={{ marginBottom: ri < config.techRows.length - 1 ? '12px' : 0 }}>
            <div className={`ticker ${ri % 2 === 1 ? 'reverse' : ''}`}>
              {[...row, ...row].map((item, i) => (
                <span key={i} className="tech-item">
                  <span className="tech-dot" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
