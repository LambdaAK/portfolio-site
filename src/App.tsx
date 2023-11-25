import './App.css'
import Nav from './ components/Nav/Nav'
import Projects from './ components/Projects/Projects'
import WelcomeSection from './ components/WelcomeSection/WelcomeSection'
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax'
import { TypeAnimation } from 'react-type-animation'

function App() {

  return (
    <ParallaxProvider>
      <div id="app">

        <WelcomeSection />
        <Projects />

      </div>
    </ParallaxProvider >
  )
}

export default App
