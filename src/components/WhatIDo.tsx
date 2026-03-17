import { useEffect, useRef } from 'react'
import { config } from '../config'
import './styles/WhatIDo.css'

const WhatIDo = () => {
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
    <section id="whatido" ref={sectionRef}>
      <div className="whatido-inner">
        <div className="whatido-header">
          <div className="section-label reveal">What I do</div>
          <h2 className="section-title reveal d1">My<br />Expertise</h2>
        </div>
        <div className="cards-grid">
          {config.skills.map((skill, i) => (
            <div key={i} className={`skill-card reveal d${i + 1}`} data-num={skill.num}>
              <div className="card-icon">{skill.icon}</div>
              <div className="card-title">{skill.title}</div>
              <div className="card-sub">{skill.sub}</div>
              <p className="card-desc">{skill.desc}</p>
              <div className="card-footer">
                <h5 className="card-tools-label">Skillset & tools</h5>
                <div className="card-tags">
                  {skill.tags.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="card-corner tl" />
              <div className="card-corner tr" />
              <div className="card-corner bl" />
              <div className="card-corner br" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
