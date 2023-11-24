import { useEffect, useState } from "react"
import "./WelcomeSection.css"
import { Parallax } from "react-scroll-parallax"

const phrases: string[] = [
  "full-stack web developer",
  "software engineer",
  "machine learning enthusiast",
  "PL enthusiast",
  "dog lover",
]

const ImA = () => {

  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((phraseIndex + 1) % phrases.length)
    }, 2000)

    return () => clearTimeout(id)
  }, [])

  return (
    <div className="im-a">
      <h2 className="second-welcome-line">I'm a</h2>
      <h1 id="im-a-phrase">
        {phrases[phraseIndex]}
      </h1>
    </div>
  )
}

export default function WelcomeSection() {
  return (
    <div id="welcome">
      <div className="welcome-text">
        <Parallax translateX={['-100px', '100px']}>
          <h1 className="first-welcome-line">Hi, I'm <span className="name">Alex</span>.</h1>
        </Parallax>
        <ImA />
        <Parallax translateX={['100px', '-100px']}>
          <h2 className="third-welcome-line">Welcome to my website.</h2>
        </Parallax>
      </div>
    </div>
  )
}