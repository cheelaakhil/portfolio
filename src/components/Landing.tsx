import { config } from '../config'
import './styles/Landing.css'

const Landing = () => {
  const [first, ...rest] = config.fullName.split(' ')
  const last = rest.join(' ')

  return (
    <section id="landing">
      <div className="landing-bg-text" aria-hidden="true">AKHIL</div>
      <div className="landing-tag">{config.tagline}</div>
      <h1 className="hero-name">
        {first.toUpperCase()}<br />
        <span>{last.toUpperCase()}</span>
      </h1>
      <div className="hero-bottom">
        <p className="hero-desc">
          Data Analyst & Aspiring Data Scientist — turning raw data into decisions that matter.
        </p>
        <div className="hero-scroll">
          <div className="scroll-line" />
          Scroll
        </div>
      </div>
    </section>
  )
}

export default Landing
