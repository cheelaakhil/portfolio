import { config } from './config'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Career from './components/Career'
import Work from './components/Work'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import './components/styles/shared.css'
import './App.css'

const App = () => {
  return (
    <div id="app">
      <Cursor />
      <Navbar />
      <Landing />
      <About />
      <WhatIDo />
      <Career />
      <Work />
      <TechStack />
      <Contact />
      <footer>
        <p>© 2026 {config.fullName}</p>
        <p>{config.role} · {config.location}</p>
      </footer>
    </div>
  )
}

export default App
