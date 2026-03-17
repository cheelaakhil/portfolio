import { useEffect, useRef } from 'react'
import { config } from '../config'
import './styles/Contact.css'

const Contact = () => {
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

  const links = [
    { label: 'Email me', href: `mailto:${config.email}` },
    { label: 'LinkedIn', href: config.links.linkedin },
    { label: 'GitHub', href: config.links.github },
    { label: 'LeetCode', href: config.links.leetcode },
  ]

  return (
    <section id="contact" ref={sectionRef}>
      <div className="contact-inner">
        <div className="section-label reveal">Get in touch</div>
        <div className="contact-big reveal d1">
          Let's work<br />on <span>data</span><br />together.
        </div>
        <div className="contact-links reveal d2">
          {links.map(({ label, href }) => (
            <a key={label} className="contact-link" href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
              {label} <span className="arr">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
