import { useEffect, useRef } from 'react'
import { config } from '../config'
import './styles/Work.css'

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.06 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="work" ref={sectionRef}>
      <div className="work-inner">
        <div className="work-header">
          <div className="section-label reveal">Projects</div>
          <h2 className="section-title reveal d1">Selected<br />Work</h2>
        </div>
        <div className="projects-grid">
          {config.projects.map((proj, i) => (
            <div key={i} className={`project-card reveal d${(i % 3) + 1}`}>
              <div className="project-num">{proj.num}</div>
              <div className="project-title">{proj.title}</div>
              <div className="project-domain">{proj.domain}</div>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-stack">
                {proj.stack.map((s, j) => (
                  <span key={j} className="project-tag">{s}</span>
                ))}
              </div>
              <div className="project-arrow">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
