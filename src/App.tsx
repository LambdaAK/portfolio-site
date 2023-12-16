import './App.css'
import Projects from './ components/Projects/Projects'
import WelcomeSection from './ components/WelcomeSection/WelcomeSection'
import { useEffect } from 'react'
import 'react-gallery-carousel/dist/index.css';

function App() {

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
      <div id="app">

        <WelcomeSection />
        <Projects />

      </div>
    </>
  )
}

export default App
