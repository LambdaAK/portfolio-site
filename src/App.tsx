import './App.css'
import Nav from './ components/Nav/Nav'
import Projects from './ components/Projects/Projects'
import WelcomeSection from './ components/WelcomeSection/WelcomeSection'

import { useEffect } from 'react'

import { motion as m, useAnimate } from "framer-motion"

import 'react-gallery-carousel/dist/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Education from './ components/Education/Education'
import Experience from './ components/Experience/Experience'


function App() {

  // get the number state from redux

  const [state, animate] = useAnimate()

  const fadeInAnimate = async () => {
    await animate(state.current, { opacity: 0, x: -200 }, { duration: 0 })
    await animate(state.current, { opacity: 1, x: 0 }, { duration: 0.5, ease: "easeInOut" })
  }

  useEffect(() => {
    fadeInAnimate()
  }, [])

  return (
    <>
      <Nav appState={state} appAnimate={animate} />
      <BrowserRouter>
        <div id="app">
          <m.div id="app-no-nav" ref={state}>
            <Routes>
              <Route path="/" element={<WelcomeSection />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </m.div>
        </div>
      </BrowserRouter>
    </>

  )
}

export default App
