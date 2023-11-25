import { useEffect, useState } from "react"
import "./WelcomeSection.css"
import { Parallax } from "react-scroll-parallax"
import { motion, useAnimate } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

function sleep(seconds: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

const phrases: string[] = [
  "full-stack web developer",
  "software engineer",
  "machine learning enthusiast",
  "PL enthusiast",
  "dog lover",
]

const ImA = () => {

  const [phraseIndex, setPhraseIndex] = useState(0)
  const [state, animate] = useAnimate()

  const animateFunction = async () => {
    await animate(state.current, { opacity: 0 }, { duration: 0 })
    await sleep(2)
    await animate(state.current, { opacity: 100 }, { duration: 2, ease: "easeInOut" })
  }

  useEffect(() => {
    animateFunction()
  }, [])


  const delay: number = 2000

  return (
    <motion.div ref={state}>
      <h2 className="second-welcome-line">
        I'm a
      </h2>
      <motion.div ref={state} className="second-welcome-line">
        <TypeAnimation
          sequence={[
            'Software Engineer',
            delay,
            'Machine Learning Enthusiast',
            delay,
            'PL Enthusiast',
            delay,
            "Full Stack Web Developer",
            delay,
            "Chess enjoyer",
            delay,
            "Rubik's cube solver",
            delay,
            "Dog lover",
            delay,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </motion.div >
    </motion.div>
  )
}

const Welcome = () => {

  const [scope, animate] = useAnimate()

  const animateFunction = async () => {
    await animate(scope.current, { opacity: 0 }, { duration: 0 })
    await sleep(4)
    await animate(scope.current, { opacity: 100 }, { duration: 2 })
  }

  useEffect(() => {
    animateFunction()
  }, [])

  return (
    <motion.div
      ref={scope}
    >
      <h2 className="third-welcome-line">Welcome to my website.</h2>
    </motion.div>
  )
}

const Hi = () => {

  const [scope, animate] = useAnimate()

  const animateFunction = async () => {
    await animate(scope.current, { opacity: 0 }, { duration: 0 })
    await animate(scope.current, { opacity: 100 }, { duration: 0.5 })
    await sleep(0.5)
    await animate(scope.current, { rotate: 90 }, { duration: 0.5 })
    await animate(scope.current, { rotate: 0 }, { duration: 0.5 })
  }

  useEffect(() => {
    animateFunction()
  }, [])

  return (
    <motion.div
      ref={scope}
    >
      <h1 className="first-welcome-line">Hi.</h1>

    </motion.div>
  )
}

const ImAlex = () => {

  const [scope, animate] = useAnimate()

  const animateFunction = async () => {
    await animate(scope.current, { opacity: 0 }, { duration: 0 })
    await sleep(0.5)
    await animate(scope.current, { opacity: 100 }, { duration: 0.5 })

    await animate(scope.current, { y: 10 }, { duration: 0.5 })
    await animate(scope.current, { y: 0 }, { duration: 0.5 })

  }

  useEffect(() => {
    animateFunction()
  }, [])

  return (
    <motion.div
      ref={scope}
    >
      <h1 className="first-welcome-line">I'm <span>Alex</span>.</h1>

    </motion.div>
  )
}

export default function WelcomeSection() {
  return (
    <div id="welcome">
      <div id="welcome-content">
        <div className="welcome-text">
          <Hi />
          <ImAlex />
          <ImA />
          <Welcome />
        </div>
      </div>
    </div>
  )
}