import { useEffect, useState } from "react"
import "./WelcomeSection.css"

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
        <h1 className="first-welcome-line">Hi, I'm <span className="name">Alex</span>.</h1>
        <ImA />
        <h2 className="third-welcome-line">Welcome to my website.</h2>
      </div>
    </div>
  )
}