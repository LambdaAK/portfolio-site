import './App.css'
import Nav from './ components/Nav/Nav'
import Projects from './ components/Projects/Projects'
import WelcomeSection from './ components/WelcomeSection/WelcomeSection'
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax'
import { TypeAnimation } from 'react-type-animation'
import { useEffect } from 'react'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

function App() {

  const images = [
    "https://raw.githubusercontent.com/LambdaAK/AlgoSandbox/main/readme%20pictures/home_page.png",
    "https://raw.githubusercontent.com/LambdaAK/AlgoSandbox/main/readme%20pictures/algos.png",
    "https://raw.githubusercontent.com/LambdaAK/AlgoSandbox/main/readme%20pictures/tags.png",
    "https://raw.githubusercontent.com/LambdaAK/AlgoSandbox/main/readme%20pictures/merge_sort.png"
  ]
    .map(image => ({ src: image }))


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
