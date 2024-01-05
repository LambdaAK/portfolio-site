import './App.css'
import Nav from './ components/Nav/Nav'
import Projects from './ components/Projects/Projects'
import WelcomeSection from './ components/WelcomeSection/WelcomeSection'

import { useEffect } from 'react'

import 'react-gallery-carousel/dist/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import React from 'react'

export const UserContext = React.createContext({
  num: 0
})

export const AnimationFunctionContext = React.createContext({
  WelcomeAnimationFunction: () => { }
})

function App() {

  // get the number state from redux

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
        else {
          entry.target.classList.remove("show")
        }
      })
    })

    const hidden = document.querySelectorAll(".hidden")

    hidden.forEach(e => {
      observer.observe(e)
    })
  }, [])

  return (
    <>
      <BrowserRouter>
        <div id="app">
          <Nav />
          <Routes>
            <Route path="/" element={<WelcomeSection />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
