import Hero from '../components/Hero'
import About from '../components/About'
import WhatImDoing from '../components/WhatImDoing'
import Skills from '../components/Skills'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <About />
      <WhatImDoing />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default Home
