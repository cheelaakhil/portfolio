import { useEffect, useRef } from 'react'
import { config } from '../config'
import './styles/Career.css'

const Career = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="career" ref={sectionRef}>
      <div className="career-inner">
        <div className="career-left">
          <div className="section-label reveal">Experience</div>
          <h2 className="section-title reveal d1">Work &<br />Simulations</h2>
        </div>
        <div className="career-list">
          {config.experience.map((exp, i) => (
            <div key={i} className={`career-item reveal d${i + 1}`}>
              <div className="career-dot-wrap">
                <div className="career-dot" />
                {i < config.experience.length - 1 && <div className="career-line" />}
              </div>
              <div className="career-content">
                <div className="career-role">{exp.role}</div>
                <div className="career-company">{exp.company}</div>
                <div className="career-date">{exp.date}</div>
                <ul className="career-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Career
